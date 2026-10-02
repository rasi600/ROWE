#!/usr/bin/env bash
set -euo pipefail
: "${ADMIN_PASSWORD:?Falta ADMIN_PASSWORD}"

npm install

# Convex: crea/usa el proyecto y guarda la contraseña como env var del backend
npx convex dev --once --configure=new   # solo la primera vez; omítelo si usas CONVEX_DEPLOY_KEY
npx convex env set ADMIN_PASSWORD "$ADMIN_PASSWORD"

# Despliega el backend y compila el front inyectando la URL de Convex
npx convex deploy --cmd "npm run build" --cmd-url-env-var-name VITE_CONVEX_URL

# Cloudflare
npx wrangler deploy 2>&1 | tee /tmp/wrangler-out.txt
grep -Eo 'https://[a-zA-Z0-9.-]+\.workers\.dev' /tmp/wrangler-out.txt | head -1
