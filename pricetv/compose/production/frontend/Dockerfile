FROM node:16-alpine as build

WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build
RUN yarn global add serve

#CMD serve -s /app/dist
CMD ["serve", "-s", "/app/dist"]



  # Серверуем проект из новой папки build (по умолчанию порт 5000)

# production environment
# FROM nginx:stable-alpine
# # nginx conf
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/build /var/www/html
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]
