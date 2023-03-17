FROM node:18-alpine

COPY . .

COPY package.json .

RUN npm install

EXPOSE 3030

CMD ["node","main.js"]