# Create Your React App - Step by Step Guide
React application build example from scratch. Watch commit messages and diffs for step by step guide!

## Preparation before starting up
To get ready for installing scripts for your application you need to install necessary software onto your computer.

### Platform independent software
- install NodeJS. How to: https://nodejs.org/en/download/
- install your favourite code editor a.k.a. IDE i.e. WebStorm, PHPStorm, Atom, VisualStudio Code or any other.

### MacOS platform
- install Xcode from AppStore. It includes necessary toolset for developers (we need Git for that)

### Windows platform
- install Git, so you'll be able to use GitHub (or other alternatives) as well as have Unix-like Terminal called "GitBash". Download from: https://git-scm.com/download/win

## Initialize development setup
There always is some preparation work to do before starting the actual application development.
This guide is being built based on "create-react-app" setup (https://goo.gl/GDFFDG).

The way I've initialise this project is running these commands on your MacOS terminal (or GitBash on Windows):
1) install "create-react-app" script globally, so you'll be able to init as many apps as you want without needing to install it again and again.
```
npm install -g create-react-app
```
2) Go to your Web projects folder and initialise your first application (I've named my app "create-your-react-app"). The way I initialise it: 
```
create-react-app create-your-react-app

```
3) Go to the freshly created project directory with "cd" command and your folder name, start the application by running "npm start": 
```
cd create-your-react-app/
npm start
```

Boom, you've got your blank application opened on the browser, meanwhile Terminal (or GitBash) has the scripts running and watching code changes which you will be introducing so it will try to recompile and refresh it automatically in your browser window.
Remember: you will have to open your Terminal (or GitBash) everytime you get back to application development and run "npm start" command from within the project directory!

## Starting development

Open your project directory with a chose code editor (IDE) and start changing the code to see what happens every time you make a change.
You may start changing some text on App.js for a start and follow commits history for step by step code changes of this app here: https://github.com/g86/create-your-react-app/commits/master

## Building the React application

In this repository I am building sample ReactJS application and you may look at commits to see how things are done step by step. I'll try to keep it as simple as possible.

## Learning Resources

- HTML: https://www.w3schools.com/html/
- CSS: https://www.w3schools.com/css/
- JavaScript: https://www.w3schools.com/js/
- ReactJS: https://facebook.github.io/react/docs/hello-world.html

The latest projects use the next version of JavaScript called "ES6" a.k.a. "ES2015".
You may find it useful to read about the features and syntax updates regarding ES6 over here: https://github.com/lukehoban/es6features#arrows 

I also recommend to read https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html to understand what "create-react-app" is.
By creating this project I assume that you already know what is HTML, CSS and have some understanding of JavaScript as well as basics of programming.