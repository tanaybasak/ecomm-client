FROM node:alpine

WORKDIR /app

# Installing dependencies
COPY package.json .

RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD ["npm", "start"]