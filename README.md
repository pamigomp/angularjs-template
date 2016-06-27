# angularjs-template - advanced template for AngularJS apps

[![Build Status](https://travis-ci.org/pamigomp/angularjs-template.svg?branch=master)](https://travis-ci.org/pamigomp/angularjs-template)
[![Coverage Status](https://coveralls.io/repos/github/pamigomp/angularjs-template/badge.svg?branch=master)](https://coveralls.io/github/pamigomp/angularjs-template?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://gemnasium.com/badges/github.com/pamigomp/angularjs-template.svg)](https://gemnasium.com/github.com/pamigomp/angularjs-template)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

This project extends the [seed project](http://github.com/angular/angular-seed) for angular apps provided by AngularJS team. It also bases on an awesome [John Papa's style guide](https://github.com/johnpapa/angular-styleguide). It is an application template for a typical [AngularJS](http://angularjs.org/) web app. You can use it to quickly bootstrap your angular web app projects and dev environment for these projects.

The template contains a sample AngularJS application and is preconfigured to install the Angular framework and a bunch of development and testing tools for instant web development gratification.

## Online Demo

You can go to following website, to see app preview:
https://angularjstemplate.herokuapp.com

## Getting Started

To get you started you can simply clone the angularjs-template repository and install the dependencies.

### Prerequisites

You need git to clone the angularjs-template repository. You can get git from [http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angularjs-template. You must have node.js and its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angularjs-template 

Clone the angularjs-template repository using [git][git]:

```bash
git clone https://github.com/pamigomp/angularjs-template.git
cd angularjs-template
```

If you just want to start a new project without the angularjs-template commit history then you can do:

```bash
git clone --depth=1 https://github.com/pamigomp/angularjs-template.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install with npm

You can also install angularjs-template with [npm][npm]:

```bash
npm install angularjs-template
cd node_modules/angularjs-template
```

### Install Dependencies

Firstly, make sure you have bower, grunt-cli and karma-cli installed globally. To do this run:

```bash
npm install -g bower grunt-cli karma-cli
```

We have two kinds of dependencies in this project: tools and angular framework code. The tools help us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, the [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```bash
npm install
```

Behind the scenes this will also call `bower install`. You should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but angularjs-template changes this location through the `.bowerrc` file. Putting it in the app folder makes it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start this server is:

```bash
npm start
```

Now browse to the app at `http://localhost:8000`.

## Directory Layout

```
app/                                --> all of the source files for the application
  assets/                               --> other application files
    css/                                  --> custom styles
    data/                                 --> custom data
    fonts/                                --> custom fonts
    images/                               --> custom images
    js/                                   --> custom JavaScript files
    libs/                                 --> custom libraries
  bower_components/                     --> the angular framework files
  common/                               --> common application files
    constants/                              --> custom angular constants    
    directives/                             --> custom angular directives    
    filters/                                --> custom angular filters
  core/                                 --> main application files
    app.js                                  --> main application module
    app.routes.js                           --> main application routes
  index.html                            --> app layout file (the main html template file of the app)
build/                              --> minified JavaScript files
node_modules/                       --> the npm packages for the tools we need
coverage/                           --> coverage reports
dist/                               --> concatenated JavaScript files
protractor-test-results/            --> e2e tests results
tests/                              --> tests scenarios
  e2e/                                  --> end-to-end tests
  unit/                                 --> unit tests
unit-test-results/                  --> unit tests results
.bowerrc                            --> bower options file
.gitignore                          --> git ignore file
.jscsrc                             --> JSCS options file
.jshintrc                           --> JSHint options file
.travis.yml                         --> Travis CI config file
Gruntfile.js                        --> Grunt config file
Procfile                            --> define command which starts app
app.json                            --> web application details file
bower.json                          --> runtime dependencies of the project
karma.conf.js                       --> Karma config file (for unit tests)
package.json                        --> development dependencies of the project
protractor-conf.js                  --> Protractor config file (for e2e tests)
server.js                           --> server config file
```

## Testing

There are two kinds of tests in the angularjs-template application: Unit tests and End to End tests.

### Running Unit Tests

The angularjs-template app comes preconfigured with unit tests. These are written in [Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit test files (specs) are placed side-by-side with client code: `app/**/*Spec.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```bash
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and watch the source and test files for changes and then re-run the tests whenever any of them change. This is the recommended strategy; if your unit tests are being run every time you save a file then you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to check that a particular version of the code is operating as expected. The project contains a predefined script to do this:

```bash
npm run test-single-run
```

### End to end testing

The angularjs-template app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests are run with the [Protractor][protractor] End-to-End test runner. It uses native events and has special features for Angular applications.

* the configuration is found at `protractor.conf.js`
* the end-to-end tests are found in `tests/e2e/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds correctly. Therefore, our web server needs to be serving up the application, so that Protractor can interact with it.

```bash
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this. The angularjs-template project comes with a predefined script to do this:

```bash
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```bash
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the development server.

## Updating Angular

Previously we recommended that you merge in changes to angularjs-template into your own fork of the project. Now that the angular framework library code and tools are acquired through package managers (npm and bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```bash
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```bash
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.

## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that don't require a backend server at all, we recommend serving the project files using a local webserver during development to avoid issues with security restrictions (sandbox) in browsers. The sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr, etc to function properly when an html page is opened via `file://` scheme instead of `http://`.

### Running the App during Development

The angularjs-template project comes preconfigured with a local development webserver. You can start this webserver with:

```bash
npm start
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.

### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but the general rule is that all you need in production are all the files under the `app/` directory. Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure out what is the best way to host the static files to comply with the same origin policy if applicable. Usually this is done by hosting the files by the backend server or through reverse-proxying the backend server(s) and webserver(s).

## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits to your repository and execute scripts such as building the app or running tests. The angularjs-template project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more instruction on how to do this.

## Cloud

### Heroku

[Heroku][heroku] is a platform as a service (PaaS) that enables developers to build, deliver, monitor, scale and run applications entirely in the cloud. It is supporting several programming languages.

You will need to enable the integration between Heroku and GitHub. See the Heroku website for more instruction on how to do this.

## Automation tool

### Grunt

[Grunt][grunt] is a JavaScript task runner for improving front-end development workflow. With the use of a number of grunt plugins you can automate repetitive tasks such as minification, compilation, unit testing or linting.

### Tasks

The following list of tasks is preconfigured in `Gruntfile.js` file:

- `grunt jshint`

    Validate JavaScript code using predefined checking options located in `.jshintrc` file.

- `grunt jscs`

    Validate JavaScript code using predefined checking options located in `.jscsrc` file.

- `grunt concat`

    Concatenate JavaScript files and put them to `dist/` directory.

- `grunt uglify`

    Minify JavaScript files and put them to `build/` directory.

- `grunt watch`

    Run `concat`, `uglify`, `jshint` or `jscs` tasks whenever watched file patterns are added, changed or deleted.

- `grunt protractor`

    Run e2e tests with protractor.
    
- `grunt karma`

    Run unit tests with karma.

- `grunt default`

    Run tasks in the following order: `jshint:all`, `jscs:all`, `karma:singleRun`, `concat`, `uglify:concat`.

## License

The MIT License, Copyright (c) 2016 Michal Pietrzak

[git]: http://git-scm.com
[grunt]: http://gruntjs.com
[bower]: http://bower.io
[npm]: https://www.npmjs.org
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[heroku]: https://www.heroku.com