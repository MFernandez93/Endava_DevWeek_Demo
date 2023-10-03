FROM node:16-alpine AS development
ENV NODE_ENV development

WORKDIR /app

COPY package*.json .

RUN npm install

#En un entorno productivo, copiaríamos al contenedor únicamente el resultado de un build.
COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]