FROM node:22-alpine
WORKDIR /workspace
ENV CGO_ENABLED=0
RUN apk add --no-cache git python3 make wget && \
    wget -q https://go.dev/dl/go1.26.5.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go1.26.5.linux-amd64.tar.gz && \
    rm go1.26.5.linux-amd64.tar.gz && \
    git config --global --add safe.directory /workspace && \
    npm install -g npm@8.19.2
ENV PATH=$PATH:/usr/local/go/bin
ENTRYPOINT ["tail", "-f"]
