# Cypress_API
REST API Tests with Cypress


# Prerequisites
VSCode: https://code.visualstudio.com/download

Git/Github: https://github.com

NPM: https://www.npmjs.com/get-npm

NodeJS: https://nodejs.org/en/download




Create New repo using git clone

# Creating a Cypress project

npm init -y

npm i cypress -D

add the following lines to the package.json file, script section::


  
    "scripts": {
     "cypress: open": "./node_modules/.bin/cypress open",
     "cypress: run": "./node_modules/.bin/cypress run --spec ** / *. spec.js"
     
     
  To start the Cypress project run the command:
  
    npm run cypressopen
    



