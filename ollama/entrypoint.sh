#!/usr/bin/env bash
set -e

# 1️⃣ Start Ollama server in background
echo "⏳ Starting Ollama server..."
ollama serve &

# 2️⃣ Wait until Ollama is ready
echo "⌛ Waiting for Ollama to be responsive..."
while ! curl -s http://localhost:11434/api/tags > /dev/null; do
  sleep 1
done

# 3️⃣ Pull model if not already present
MODEL="gemma:2b"
if ollama list | grep -q "${MODEL}"; then
  echo "✅ Model ${MODEL} already present."
else
  echo "⬇️ Pulling model ${MODEL} ..."
  ollama pull "${MODEL}"
  echo "✅ Model ${MODEL} pulled successfully."
fi

# 4️⃣ Wait for server (foreground) so container stays live
wait
