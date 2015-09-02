FROM node:0.10-onbuild

# Install app dependencies
RUN npm install

EXPOSE  8080

CMD ["node", "server.js"]