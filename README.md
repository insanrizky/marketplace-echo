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
Build and Deploy by [Vercel.com](https://vercel.com)

Visit Here: https://marketplace-echo.vercel.app


## API Doc

All API starts with `/api` prefix

| Method | Endpoint | Params |
|---|---|---|
| GET | /fb-credit | ?kwuid={number}&credit={number} |
