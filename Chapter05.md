# Chapter 5 Building a Strong Foundation: TypeScript

## What Is TypeScript
TypeScript can be thought of as a wrapper, of sorts, around JavaScript, or an extension to it.

All JavaScript code is _also_ valid TypeScript code.

IntelliSense is an IDE component that provides hints to the developer about
what types are allowed in what situations.

TypeScript is one of the most popular languages for building web-facing
applications.

When TypeScript is compiled to JavaScript, all the TypeScript-y bits are
stripped out, leaving just JavaScript.

Data types, are purely a development-time construct.

You can test TypeScript on their [homepage](http://typescriptlang.org) in
the area called "the playground".

## Beyond the Playground
Install typescript: `npm install typescript`

Make sure to reference the path: `export PATH=$PATH:./node_modules/typescript/bin`

TypeScript files are suffixed: `.ts`

Test out the code in [app1](./ch05/app1)

Compile using: `tsc app.ts`. This will generate `app.js`.

Once this file is generated you can open the `index.html` file in a browser.


TypeScript comes with a configuration file that can be generated: `tsc -init`.
This file is called `tsconfig.json` and allows you to compile all typescript
files in the current and child directories.

TypeScrpt Types:
* String
* Number
* Boolean
* Any
* Arrays
* Tuples
* Enums (not a Javascript construct)
* Function
* Object
* Null, Void, and Undefined
* Custom Type Aliases
* Union Types
* TypeScript == ES6 Features for "Free"!
* The let and const Keywords
* Block Scope
* Arrow Functions
* Template Literals
* Default Parameters
* Spread and Rest (and as an Added Bonus: Optional Arguments)
* Destructuring
* Classes
* Properties
* Member Visibility
* Inheritance
* Getters and Setters
* Static Members
* Abstract Classes
