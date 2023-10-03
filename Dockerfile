FROM node:16-alpine AS development
ENV NODE_ENV development

ARG PORT
ARG PROJECT_PATH

WORKDIR /app

#   En un entorno productivo, copiaríamos al contenedor únicamente el resultado de un build y los archivos necesarios
# para instalar las dependencias del proyecto.
COPY $PROJECT_PATH .
RUN npm install

EXPOSE $PORT

CMD [ "npm", "start"]