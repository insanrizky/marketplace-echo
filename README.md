# Marketplace Echo Server

This service used for testing Campaign Webhook - Marketplace Integration

## System Requirement
- NodeJS v12.13.0
- Yarn 1.13.0

## Setup

After cloning this repository, follow the steps below:

#### Install Dependencies
```shell
yarn install
```

#### Run in Local
```shell
yarn dev
```

#### Run in Production
- Install dependencies as documented above
- Build ts file
    ```shell
    yarn build
    ```
- Start prod daemon
    ```shell
    yarn start
    ```
    This can be added on supervisor to run as daemon to ensure its live forever


## API Doc

All API starts with `/api` prefix

| Method | Endpoint | Params |
|---|---|---|
| GET | /fb-credit | { kwuid: number, credit: number } |
