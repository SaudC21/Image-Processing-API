# Image Processing API - Udacity Fullstack JS Nanodegree

## Introduction
This is a simple REST API allowing users to create, access and resize placeholder images using the Sharp Node.js image processing module.

## Getting Started
Installing dependencies
After cloning the repo, all the project dependencies can be installed using npm:

```npm install```

## Running the server
To execute the application use the following command in terminal:

```npm run start```

the app will then be available on port 4000 by default.

## Scripts
The following actions can be executed through npm scripts:

### Transpiling typescript to javascript

```npm run build```

The transpiled code will be available in the build folder.

### Testing
A jasmine testing suite can be used to validate the endpoint as well as the imageTransform functionality.

```npm run test```

### Formatting
The code can be automatically formatted using prettier. The formatting options can be customised by editin the .prettierrcfile.

```npm run format```

### Linting
The code can ba automatically linted using ESlint. Note that ESlint will also use prettier to test for incorrect formatting. Rules, plugins and extensions for ESlint can be modified through the .eslintrc file.

```npm run lint```
