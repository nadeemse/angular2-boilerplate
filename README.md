# Angular2 boilerplate

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.14.

This project includes modular approach and inner routes, Default modules are  

## catalog
    Products
    Categories 

## Account 
    Profile
    Login
    SignUp
    Forgot-password 

## CMS-pages
## Shopping-cart

All these modules are based on inner routing & modular approach.

## Project Setup


Follow the following steps and you're good to go! Important: NPM has to be installed on your machine!

## 1: Clone repo
    git clone https://github.com/nadeemse/angular2-boilerplate.git
    
## 2: Install packages
    cd angular2-boilerplate
    npm install
    npm install -g angular-cli

## potential issues

    Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
    
    If you will see this error then it mean that angular-cli version need to be upgraded, simply follow below steps to make it run.

    1) npm uninstall angular-cli -g

    This willl remove angular-cli global version.

    2) npm cache clean

    Clear NPM cache

    3) npm install angular-cli@latest -g

    Install latest version of angular-cli globally

    4)  rm -rf node_modules dist tmp

    Remove node modules, dist and tmp folder by running above command.

    5) npm install angular-cli@latest --save-dev

    Install latest angular-cli version in your project 

    6) npm install 

    install dependencies 

    7) ng serve 

    Enjoy developing Angular2 application.

    
## Further help for Angular CLI 
    To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 3: Start server
   Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

    
## Code scaffolding


## Component

Run `ng generate component component-name` to generate a new component. to generate an sub component navigate to component and runt same command `ng generate component component-name` OR `ng g c component-name` 

## Directive

Run `ng g directive my-new-directive` to generate a new directive. 

## Pipe

Run `ng g pipe my-new-pipe` to generate a new pipe. 

## Service

Run `ng g service my-new-service` to generate a new Service. 

## Class

Run `ng g class my-new-class` to generate a new Class. 

## Interface

Run `ng g interface my-new-interface` to generate a new Interface.

## Enum

Run `ng g enum my-new-enum` to generate a new Enum.  

## Serve

Run `ng serve` to serve the project while developing application. 


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.


## MORE HELP 

For help, Drop me an email on [nadeemakhtar.se@gmail.com](nadeemakhtar.se@gmail.com)