# Terraloom Webapp
This is a frontend (webapp) for my miniature e-commerce project Terraloom. Used for : 
- Transaction
- Payment
- Creating an account

## Specification

The application is written in Typescript. With specification : 
- Node (ver 22+)
- NPM (ver 10+)
- Tailwind CSS (version 4+)
- React Flowbite (version 12+)

## Prepare the CORE API

You should make sure that CORE API is running , before run the webapp. you can find the back end here : 
> https://github.com/jhasudungan/terraloom-core-api

## Prepare Minio object storage
You need to have minio object storage installed and configured alongside the CORE API & CMS, so product picture can be loaded. 

## Run in local
- Make sure minio object storage running and configured to work alongside the CMS and CORE API
- Make sure you had Node, NPM and GIT available in you machine
```shell
# Check Node
node --version

# Check NPM
npm --version
```
- Pull this repository 
```shell
git pull {thisrepository}
```
- Create the .env in the root of the project
```shell
CORE_API_HOST=
CORE_JWT_SECRET=
```
- **CORE_API_HOST** is a host for CORE API
- **CORE_JWT_SECRET** is secret for JWT shared between CORE API and this e-commerce webapp.
- You can run in dev mode : 
```shell
npm run dev
```
- You can build and start : 
```shell
npm run build
npm run start
```
- The application will run on port 3000