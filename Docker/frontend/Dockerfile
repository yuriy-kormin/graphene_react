FROM node:alpine as build
ARG REACT_APP_BACKEND_URL="http://localhost:8000/graphql/"
WORKDIR /app/
COPY app/frontend/ .
RUN npm install --omit=dev && \
    npm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
