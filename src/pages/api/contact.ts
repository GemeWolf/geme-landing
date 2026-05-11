import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const webhookUrl = (locals.runtime?.env?.DISCORD_WEBHOOK_URL as string | undefined)
    ?? import.meta.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return new Response(JSON.stringify({ error: 'Server misconfiguration' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (webhookUrl.includes('discordapp.com')) {
    return new Response(
      JSON.stringify({
        error: 'Discord webhook URL uses deprecated domain. Please update DISCORD_WEBHOOK_URL to use discord.com',
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name    = typeof body.name    === 'string' ? body.name.trim().slice(0, 100)    : '';
  const email   = typeof body.email   === 'string' ? body.email.trim().slice(0, 254)   : '';
  const subject = typeof body.subject === 'string' ? body.subject.trim().slice(0, 200) : '';
  const message = typeof body.message === 'string' ? body.message.trim().slice(0, 2000) : '';

  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email address' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const payload = {
    embeds: [
      {
        title: `📬 New contact — ${subject}`,
        color: 0x963547,
        fields: [
          { name: '👤 Name',    value: name,    inline: true  },
          { name: '📧 Email',   value: email,   inline: true  },
          { name: '📋 Subject', value: subject, inline: false },
          { name: '💬 Message', value: message, inline: false },
        ],
        footer: { text: 'geme.dev contact form' },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  const discordRes = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!discordRes.ok && discordRes.status !== 204) {
    return new Response(JSON.stringify({ error: 'Failed to deliver message' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
