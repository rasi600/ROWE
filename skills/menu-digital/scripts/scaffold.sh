#!/usr/bin/env bash
set -euo pipefail

BUSINESS_NAME="$1"; WORKER_NAME="$2"; LANGS="$3"
SKILL_DIR="$HOME/.claude/skills/menu-digital"

[ -e "$WORKER_NAME" ] && { echo "ERROR: ./$WORKER_NAME ya existe"; exit 1; }

cp -r "$SKILL_DIR/template" "./$WORKER_NAME"

# Reemplazo robusto usando variables de entorno para evitar problemas con acentos
export BN="$BUSINESS_NAME" WN="$WORKER_NAME" LG="$LANGS"
find "./$WORKER_NAME" -type f \
  -not -path "*/node_modules/*" \
  \( -name "*.json*" -o -name "*.ts" -o -name "*.tsx" \
  -o -name "*.html" -o -name "*.css" \) -print0 | \
  xargs -0 perl -pi -e 's/__BUSINESS_NAME__/$ENV{BN}/g; s/__WORKER_NAME__/$ENV{WN}/g; s/__LANGS__/$ENV{LG}/g'

echo "Scaffold listo en ./$WORKER_NAME"
