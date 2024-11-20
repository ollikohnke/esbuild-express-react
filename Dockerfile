FROM node:lts-alpine

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package*.json ./

RUN chown -R node:node /home/node/app

USER node

COPY --chown=node:node . .

RUN npm install && npm run build

EXPOSE 3001

CMD [ "node", "beta_server.js" ]