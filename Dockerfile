FROM node:15

WORKDIR /app

COPY package*.json ./

# Installs all node packages
RUN npm install 

COPY . .

EXPOSE 80

# start app
CMD ["npm", "run", "dev"]