FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x /app/node_modules/.bin/vite

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]