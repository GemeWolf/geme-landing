# geme-landing

Landing / portfolio (Astro + Tailwind v4).

## Comandos

| Comando         | Acción                          |
| --------------- | ------------------------------- |
| `npm install`   | Instalar dependencias           |
| `npm run dev`   | Servidor en `localhost:4321`    |
| `npm run build` | Build estático en `./dist/`     |
| `npm run preview` | Previsualizar el build        |

Requiere **Node.js ≥ 22.12** (ver `package.json`).

## Git: ramas y despliegue

| Rama   | Uso |
| ------ | --- |
| `geme` | Desarrollo diario y commits. |
| `dev`  | Integración: los PR desde `geme` apuntan aquí. |
| `main` | Producción. |

**Promoción automática:** al hacer push a `dev`, GitHub Actions ejecuta `npm ci` y `npm run build`; si pasa, fusiona `dev` en `main` (workflow `promote-dev-to-main.yml`).

**CI:** en pushes a `geme`/`dev` y PRs hacia `dev`/`main` se ejecuta el mismo build (`ci.yml`).

### Ajustes en GitHub

- Si `main` tiene **branch protection** que exija revisión o bloquee al bot, el paso de merge fallará. Opciones: permitir que GitHub Actions suba a `main`, o usar un PAT en un secret y `git push` con ese token.
- Tras el primer workflow en el repo, revisa la pestaña **Actions** si algo falla.
