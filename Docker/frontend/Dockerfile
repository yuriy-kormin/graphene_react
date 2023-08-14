FROM node:alpine

COPY ["app/frontend/package.json","app/frontend/package-lock.json","Docker/frontend/docker-entrypoint.sh","/"]
WORKDIR /
RUN npm install -g npm@latest && \
    npm install && \
    npm ci --install-strategy=shallow --omit=dev --silent &&  \
    npm cache clean --force
CMD ["/docker-entrypoint.sh"]