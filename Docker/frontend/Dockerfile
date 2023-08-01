FROM node:20-alpine
WORKDIR /app/
COPY ./app/frontend/package*.json ./app/frontend/public ./
RUN npm install
RUN npm run build
CMD ["npm", "start"]
