# Random Quote Generator

An application to randomly display a quote. The NestJs server uses an in-memory sqlite database.

## About this project

This project is split into 3 separate packages:

```bash
.
├── packages
│   ├── client  # ReactJs application
│   ├── domain  # TypeScript library
│   ├── server  # NestJs api application
```

### Built With

[![NestJs][nest.js]][Nest-url] [![React][React.js]][React-url]

## Getting Started

### Installation

1. Clone the repo

   ```
   git clone https://github.com/barryajones/violet-labs.git
   ```

2. Install packages

   ```
   yarn
   ```

3. Build the domain library

   ```
   yarn build:domain
   ```

   This will build the domain library which contains a shared interface used in the `server` and `client` apps.

## Running the app

To run the application you need will need to start the api server and client application.

### Start the API Server

Open a terminal window and run the following command:

```
yarn start:server
```

![](https://i.imgur.com/I2Kelil.png)

This will start the NestJs application and seed the in-memory sqlite database with data from the [office_quotes.json](./packages//server//src//seeds/office_quotes.json).

You can access the api from your browser or with postman at the following address `http://localhost:3000/quote`. Alternatively open a terminal window and use cURL

```
curl 'http://localhost:3000/quote' \
  -H 'Accept: */*' \
  -H 'Accept-Language: en-US,en;q=0.9'
```

### Start the client

Open annother terminal window to start the client application.

```
yarn start:client
```

![](https://i.imgur.com/qH6vBTM.png)

This will run the app in the development mode. Open http://localhost:4000 to view it in the browser. To display a different quote press the **Random Quote** button.

![](https://imgur.com/5lx9rVP.png)

## Tests

### Server e2e Tests

```
cd packages/server && yarn test:e2e
```

```
cd packages/server
yarn test
```

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Nest.js]: https://img.shields.io/badge/NestJs-20232A?style=for-the-badge&logo=nestjs&logoColor=e0234d
[Nest-url]: https://nestjs.com/

## What We Expect From You

1. Create an application that creates and uses a RESTful API to retrieve and display a random quote from the given [office-quotes](https://github.com/VioletLabsInc/random-quote-generator/blob/master/src/data/office_quotes.json) dataset. This application does not need to be deployed or hosted anywhere- just something you can run locally.
2. Add tests to your newly created application.
3. Add any additional feature of your choice.
4. Update the README with any information you want to include that will help us understand and run your project.
5. Upload your completed code to your own Git repository and share it with us.
