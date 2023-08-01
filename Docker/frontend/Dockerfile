FROM node:alpine as build
WORKDIR /app/
COPY ./app/frontend/package*.json ./
COPY ./app/frontend/public ./
RUN npm install --omit=dev && \
    npm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
