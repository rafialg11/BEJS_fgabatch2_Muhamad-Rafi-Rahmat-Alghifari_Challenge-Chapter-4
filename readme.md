# Banking System Simple API (Challenge 4 Binar Academy FGA)

An API to manage bank accounts, users, and transactions.

## Getting started

### Setting up a project

* Move into your projects directory
* Clone this repository: `https://github.com/rafialg11/BEJS_fgabatch2_Muhamad-Rafi-Rahmat-Alghifari_Challenge-Chapter-4.git`
* Move into the project directory: `cd BEJS_fgabatch2_Muhamad-Rafi-Rahmat-Alghifari_Challenge-Chapter-4`
* Install the dependencies: `npm install`

* Run the development task: `npm run start`
    * Starts a server running at http://localhost:3000
    * Automatically restarts when any of your files change

## Configuration

### Environment variables
```bash
DATABASE_URL="postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

### Database connection
Run the following command to migrate the database models:
```bash
npx prisma migrate dev --name init
```	

## API Documentation

This repository contains the API documentation in Insomnia JSON format.

### Usage

1. Download the `BankingSystem_4_APIDocumentation.json`.
2. Open Insomnia.
3. Go to `Application` > `Preferences` > `Data` tab.
4. Click on `Import Data` > `From File`.
5. Select the downloaded JSON file.



