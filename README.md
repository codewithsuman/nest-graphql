# nest-graphql

Sample implementation of loaders using Mercurius with nest to avoid the 1 + N query problem of GraphQL.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## GraphQL Query

```
query posts {
  posts {
    body
    id
    title
    createdBy {
      id
      name
    }
    updatedBy {
      id
      name
    }
  }
}
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Development

[CRUD-Generator](https://docs.nestjs.com/recipes/crud-generator#crud-generator) to generate the boiler plate code.

[Generate](https://docs.nestjs.com/cli/usages#nest-generate) schematic helpful commands.

```bash
# Install the Nest CLI
$ npm i -g @nestjs/cli

# Generate resource
$ nest g res <resource-name>
# ? What transport layer do you use? GraphQL (code first)
# ? Would you like to generate CRUD entry points? Yes
```

## Running Docker

```bash
# build docker image
$ docker build -t nest-gql .

# run docker image
$ docker run -dp 3000:3000 nest-gql
```

## Inspiration / Interesting Reads

[NestJS-GraphQL](https://docs.nestjs.com/graphql/quick-start) is a powerful query language for APIs and a runtime for fulfilling those queries with your existing data.

[Mercurius](https://mercurius.dev/#/) is a GraphQL adapter for Fastify

[Data loader](https://dev.to/filipegeric/using-graphql-dataloaders-with-nestjs-2jo1) sample implementation by Filip Egeric

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
