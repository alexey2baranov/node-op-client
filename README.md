#op-client

client library for OpenProject.org server. Works with Node.js  and browser both.

## Installation
```bash
npm add op-client
```

## Quick start
```ts

const em= new EntityManager({
  oauthOptions: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    accessTokenUri: `http://${process.env.HOST}:${process.env.PORT}/oauth/token`,
  },
  apiOptions: {
    path: `http://${process.env.HOST}:${process.env.PORT}`
  },
  createLogger(){
    return console
  })
```

## Development

```bash
# clone repo
git clone https://github.com/alexey2baranov/node-op-client
cd node-op-client

# add .env file if you want to run integrated tests(see below)
touch .env

# run OpenProject's docker container if you want to run integrated tests
npm run test:server:up

# run tests
npm test

# stop docker container
npm run test:server:down
```

## <PROJECT_ROOT>/.env file

.env file contains variables which are needed to run integrated tests. See example below.

```env
SCHEMA=http
HOST=urz.open.ru
PORT=8093

CLIENT_ID=2qbJstJDMxleIrlMfQDb_DL6-heRpfoJhS0mGAFFGE4
CLIENT_SECRET=9p7YlHjT2awq-QK2qGG4Ynr7uFWUgEgJL6IKAv9198Vs
```
