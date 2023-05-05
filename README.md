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

### Prerequisites

- Node v16

```
npm install npm@latest -g
```

To install the dependencies and run the scripts it is recommended to use `yarn`

```
npm install --global yarn
```

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

Open a terminal window and run the following command from the root of the project:

```
yarn start:server
```

![](https://i.imgur.com/I2Kelil.png)

This will start the NestJs application and seed the in-memory sqlite database with data from [office_quotes.json](./packages//server//src//seeds/office_quotes.json).

You can access the api from your browser or with postman at the following address http://localhost:3000/quote. Alternatively open a terminal window and use cURL

#### Random Quote

```
curl 'http://localhost:3000/quote' \
  -H 'Accept: */*' \
  -H 'Accept-Language: en-US,en;q=0.9'
```

#### Random Quote by 'Jim' or 'Pam'

```
curl 'http://localhost:3000/quote?characters=Jim,Pam' \
  -H 'Accept: */*' \
  -H 'Accept-Language: en-US,en;q=0.9'
```

### Start the client

Open another terminal window to start the client application.

```
yarn start:client
```

![](https://i.imgur.com/qH6vBTM.png)

This will run the app in the development mode. Open http://localhost:4000 to view it in the browser. To display a different quote press the **Random Quote** button.

![](https://imgur.com/7uFZMaq.png)

## Tests

### Server Unit Tests

```
cd packages/server && yarn test
```

![](https://imgur.com/c4XExhA.png)

### Server e2e Tests

```
cd packages/server && yarn test:e2e
```

![](https://imgur.com/97h1wG3.png)

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Nest.js]: https://img.shields.io/badge/NestJs-20232A?style=for-the-badge&logo=nestjs&logoColor=e0234d
[Nest-url]: https://nestjs.com/
