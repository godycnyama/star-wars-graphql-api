# Star Wars (GraphQL API)

## Description

This Star Wars GraphQL API wraps the Star Wars RESTful api at https://swapi.dev/api/ .This graphql api provides a way to retrieve detailed information about characters of the Star Wars Universe. It allows users to retrieve a list all Star Wars characters and details of each individual character. A user can search for a particular character using the character's name.It is based on nestjs, a typescript based Node.js server. The graphql engine uses the apollo-server-express module. The code is written in typescript.

## Setup/Installation

Make sure you have Node 12, Typescript 3.4+, Yarn and Git installed on you computer.To install the app, run the following command: git clone https://github.com/godycnyama/star-wars-graphql-api.git in the command line. cd to star-wars-graphql-api root and install Node packages by running the following command: npm install. When running, the graphql endpoint is saved on localhost:7000/graphql. The Playground UI is served on localhost:7000/.

## Installation

$ npm install

## Running the app

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

## Test

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov



