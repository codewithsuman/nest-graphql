FROM node:16.10 As build

WORKDIR /app
COPY package*.json ./

RUN npm install --silent
COPY . .
RUN npm run build

# deployment
FROM node:16.10

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production --silent

COPY . .
COPY --from=build /app/dist ./dist

EXPOSE 3000
CMD ["sh", "-c", "npm run start:prod"]