FROM node:16 as build-deps
WORKDIR /usr/src/frontend
COPY ./frontend/package.json ./frontend/yarn.lock ./
RUN yarn install
COPY ./frontend/ ./
RUN yarn run build

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]