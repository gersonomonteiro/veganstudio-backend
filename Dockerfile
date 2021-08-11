FROM node:10

#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

#COPY --chown=node:node . .

#USER node

ADD docker-entrypoint.sh /usr/src/app/
RUN chmod 755 /usr/src/app/docker-entrypoint.sh

ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"] 

EXPOSE 3000
CMD [ "node", "index.js" ]
