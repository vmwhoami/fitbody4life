FROM ollama/ollama:0.1.34
# Install curl
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copy your entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENV OLLAMA_KEEP_ALIVE=-1

EXPOSE 11434
ENTRYPOINT ["/bin/bash", "/entrypoint.sh"]