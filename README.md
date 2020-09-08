# BugLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng build bug-lib` to build the library if changes are made.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. This will run the test project which has the library in use.

## Publish and Usage

Navigate to dist folder.
Run `npm publish`.

To use:
npm install BugBountySystem-lib
in app.module.ts add `import {BugLibModule}   from 'bug-lib' `.
in app.module.ts add ` BugLibModule ` to imports.
in html files add `<lib-bug-lib> </lib-bug-lib>` to add lirary to project.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
