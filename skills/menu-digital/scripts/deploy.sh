#!/usr/bin/env bash
set -euo pipefail

: "${ADMIN_PASSWORD:?Falta ADMIN_PASSWORD}"

npm install

# Configura Convex y guarda la contraseña de admin en producción
if [ -z "${CONVEX_DEPLOY_KEY:-}" ]; then
    npx convex dev --once --configure=new
    npx convex env set --prod ADMIN_PASSWORD "$ADMIN_PASSWORD"
else
    npx convex env set ADMIN_PASSWORD "$ADMIN_PASSWORD"
fi

# Despliega el backend y compila el front inyectando la URL de Convex
npx convex deploy --yes --cmd "npm run build" --cmd-url-env-var-name VITE_CONVEX_URL

# Despliegue final en Cloudflare
npx wrangler deploy
