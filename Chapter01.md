# Chapter 1 Server-Side Action: Node and NPM
* Full-stack development means codin clients as well as the server code they
  make use of in order to form a cohesive, whole application.

## Of JavaScript Runtimes and Building (Mostly) Servers
* Node is a platform for running primarily, though not exclusively, server-side
  code that has high performance and is capable of handling large request
  loads with ease.
* In Node, almost everything you do is nonblocking, meaning code won't hold
  up the processing of other request threads.
* Node uses Google's popular and high performance and able to handle a large
  request load.
* Node is event-driven and single-threaded with background workers.
* There is no context switching between threads but also that the single thread
  is never sitting idle.
* Node is a first-class runtime environment, meaning that you can do such
  things as interacting with the local file system, access relational databases,
  call remote systems, and much more.
* Node allows you to use the same language and knowledge on both client and
  server, something that was difficult to accomplish before.

## First Baby Steps with Node: Installation
* You can download Node from: [http://nodejs.org](http://nodejs.org).

## Node's Partner in Crime: NPM
* NPM stands for Node Package Manager: [www.npmjs.com](http://www.npmjs.com).

### Initializing a New NPM/Node Project
* With most Node/NPM projects, you'll also have a file named `package.json` in
  the root directory of the project. This file is the project manifest file, and
  it provides metadata information to NPM (and Node, at least indirectly) about
  your project that it needs to do certian things. It will tell NPM what modules
  to install if they haven't been installed yet for one thing. It will also
  contain information like the name and version of the project, its main entry
  point, and lots of other information.
```
npm init
```

### Adding Dependencies
```
"dependencies": {
  "express": "^4.16.1"
}
```

You can automatically add this to the `package.json` file:
```
npm install express --save
```

The flag `--save-dev` adds a `devDependencies` entry which is used for modules
that are only needed during development like `babel` and `typescript`.

## Fisher Price's "My First Node Web Server"
[A simple HTTP server](./ch01/server/server.js)

In the `scripts` section of the `package.json` file add:
```
"start": "node server.js"
```
Then you can use:
```
npm start
```
To start the server.

The `require()` function returns an object that is essentially the API provided
by the module.

### Bonus Example
First install `request`:
```
npm install request --save
```
[A Request Server](./ch01/server2/server.js)

What we're doing now is firstly to import the _request_ module and to give it
the name `requestModule` (just to help disambiguate it from the `inRequest`
object passed into the callback function).

