## Description

Development framework for server-side applications based on node by Nestjs

Core technology: node.js, NestJs, TypeORM, MongoDB, Sql server

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## DB config 
ormconfig.json

## Installation

```bash
$ npm install

$ npm install -g typeorm-model-generator
```

## Running the app

SwaggerUI page: `localhost:3002/api`


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## CLI command (Important)

```bash
# generate CRUD module
$ nest g resource <name>

# check info
$ nest info
```

## SwaggerUI for express

```bash
# use swagger
$ npm install --save @nestjs/swagger swagger-ui-express
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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).


## License

Nest is [MIT licensed](LICENSE).
