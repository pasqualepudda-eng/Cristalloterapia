#!/bin/bash
# Avvia il sito Alchimia Interiore su http://127.0.0.1:5500
cd "$(dirname "$0")"
PORT=5500
URL="http://127.0.0.1:$PORT/"

PIDS=$(lsof -ti:$PORT -sTCP:LISTEN 2>/dev/null)
if [ -n "$PIDS" ]; then
  echo "La porta $PORT e' gia' occupata da:"
  lsof -i:$PORT -sTCP:LISTEN -P -n | tail -n +2 | awk '{print "  - PID "$2" ("$1")"}'
  echo
  echo "Se e' il Live Server di VS Code su questa cartella, il sito e' gia' online qui:"
  echo "  $URL"
  echo
  read -r -p "Vuoi fermare quei processi e servire il sito da qui? [s/N] " R
  case "$R" in
    s|S|y|Y) echo "$PIDS" | xargs kill 2>/dev/null; sleep 1 ;;
    *) open "$URL"; exit 0 ;;
  esac
fi

echo "Alchimia Interiore -> $URL"
echo "Premi Ctrl+C per fermare il server."
(sleep 1; open "$URL") &
python3 -m http.server $PORT --bind 127.0.0.1
