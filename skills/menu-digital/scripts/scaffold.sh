#!/usr/bin/env bash
set -euo pipefail

BUSINESS_NAME="$1"; WORKER_NAME="$2"; LANGS="$3"
SKILL_DIR="$HOME/.claude/skills/menu-digital"

[ -e "$WORKER_NAME" ] && { echo "ERROR: ./$WORKER_NAME ya existe"; exit 1; }
cp -r "$SKILL_DIR/template" "./$WORKER_NAME"

# Reemplazo portable (macOS y Linux)
find "./$WORKER_NAME" -type f \
  -not -path "*/node_modules/*" \( -name "*.json*" -o -name "*.ts" -o -name "*.tsx" \
  -o -name "*.html" -o -name "*.css" -o -name "*.md" \) -print0 |
xargs -0 perl -pi -e "
  s/__BUSINESS_NAME__/\Q$BUSINESS_NAME\E/g;
  s/__WORKER_NAME__/$WORKER_NAME/g;
  s/__LANGS__/$LANGS/g;
"
echo "Scaffold listo en ./$WORKER_NAME"
