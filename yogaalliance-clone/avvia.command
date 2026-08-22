#!/bin/bash
# Avvia il clone locale su http://127.0.0.1:5500
cd "$(dirname "$0")"
PORT=5500
URL="http://127.0.0.1:$PORT/index.html"

PIDS=$(lsof -ti:$PORT -sTCP:LISTEN 2>/dev/null)
if [ -n "$PIDS" ]; then
  echo "La porta $PORT e' gia' occupata da:"
  lsof -i:$PORT -sTCP:LISTEN -P -n | tail -n +2 | awk '{print "  - PID "$2" ("$1")"}'
  echo
  echo "Se e' il Live Server di VS Code sulla cartella 'chakra', il clone e' gia' online qui:"
  echo "  http://127.0.0.1:$PORT/yogaalliance-clone/index.html"
  echo
  read -r -p "Vuoi fermare quei processi e servire il clone dalla sua cartella? [s/N] " R
  case "$R" in
    s|S|y|Y) echo "$PIDS" | xargs kill 2>/dev/null; sleep 1 ;;
    *) open "http://127.0.0.1:$PORT/yogaalliance-clone/index.html"; exit 0 ;;
  esac
fi

echo "Clone Yoga Alliance -> $URL"
echo "Premi Ctrl+C per fermare il server."
(sleep 1; open "$URL") &
python3 -m http.server $PORT --bind 127.0.0.1
