---
name: menu-digital
description: Crea y despliega un sitio completo para restaurantes o negocios similares (landing page, menú digital interactivo y panel de administración con Convex) en Cloudflare Workers. Úsala cuando el usuario pida "armar un menú digital", "carta digital", "menú QR" o "sitio para restaurante/cafetería/bar", o invoque /menu-digital.
argument-hint: [nombre del negocio]
allowed-tools: AskUserQuestion, Read, Edit, Bash(bash ~/.claude/skills/menu-digital/scripts/*), Bash(npm *), Bash(npx convex *), Bash(npx wrangler *)
---

# Menú Digital

Automatiza el despliegue de landing + menú digital + admin panel (Convex) en Cloudflare.

## Archivos de esta skill
- Plantilla base: `~/.claude/skills/menu-digital/template/`
- Scaffold: `~/.claude/skills/menu-digital/scripts/scaffold.sh`
- Deploy: `~/.claude/skills/menu-digital/scripts/deploy.sh`
- Placeholders: ver `reference.md`

## Paso 0 — Prerrequisitos
Verifica en silencio: `node -v` (>=20), `npx wrangler whoami` (sesión de Cloudflare
o variable `CLOUDFLARE_API_TOKEN`) y acceso a Convex (sesión iniciada o
`CONVEX_DEPLOY_KEY`). Si falta algo, dile al usuario exactamente qué comando
ejecutar (`npx wrangler login`, `npx convex login`) y detente hasta que confirme.

## Paso 1 — Preguntas (una sola llamada a AskUserQuestion)
Si el usuario ya dio algún dato en su mensaje o en `$ARGUMENTS`, NO lo preguntes.
Haz solo las que falten (máximo 4):

1. **Nombre del negocio** → variable `BUSINESS_NAME`
2. **Worker name** (slug en minúsculas, sin espacios; propón uno derivado del nombre) → `WORKER_NAME`
3. **Idiomas** (Solo español / Español + inglés / Español + inglés + portugués) → `LANGS`
4. **Contraseña de admin** (ofrece "Generar una segura automáticamente" como primera opción) → `ADMIN_PASSWORD`

Si elige generar: `openssl rand -base64 18 | tr -d '/+=' | cut -c1-16`.

## Paso 2 — Scaffold
Ejecuta:
```
bash ~/.claude/skills/menu-digital/scripts/scaffold.sh "<BUSINESS_NAME>" "<WORKER_NAME>" "<LANGS>"
```
Esto crea `./<WORKER_NAME>/` con los placeholders ya reemplazados.
La contraseña NO se escribe en el código (ver Paso 3).

## Paso 3 — Build y despliegue
```
cd <WORKER_NAME>
ADMIN_PASSWORD="<ADMIN_PASSWORD>" bash ~/.claude/skills/menu-digital/scripts/deploy.sh
```
El script instala dependencias, despliega Convex, define la contraseña como
variable de entorno de Convex, compila y hace `wrangler deploy`.

## Paso 4 — Verificación
Haz `curl -sI <URL>` y confirma HTTP 200. Si falla, lee el error, corrígelo y
reintenta una vez; si persiste, repórtalo al usuario.

## Paso 5 — Resultado (formato exacto)
- 🌐 URL en vivo: `<URL>`
- 🔧 Panel de admin: `<URL>/admin`
- 🔑 Contraseña de admin: `<ADMIN_PASSWORD>`
- Recuérdale guardar la contraseña; no se almacena en el repositorio.

## Reglas
- No hagas más preguntas de las necesarias.
- Nunca imprimas tokens de API.
- Nunca hardcodees la contraseña en archivos del proyecto.
- Si el directorio `./<WORKER_NAME>` ya existe, pregunta antes de sobrescribir.
