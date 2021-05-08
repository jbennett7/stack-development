# Chapter 6: A Few More Words: Advanced TypeScript

## Argument/Oject Interfaces
Using a function without an interface:

link: [app1](./app1/app.ts)

This is okay except when hte `person` doesn't have have the `firstName` property.

Interfaces are contracts that your code must adhere to.
In this example the interface is defined directly inline in the argument list
of the `greet()` function.

link: [app2](./app2/app.ts)

Interfaces only exist in TypeScript. Here we directly define one:

link: [app3](./app3/app.ts)

If you pass an object literal, you can _only_ specify properties that are in the interface.

link: [app4](./app4/app.ts)

If you add a ? after the property's name in the interface, then that means it's
optional:

link: [app5](./app5/app.ts)

## Methods in Interfaces
link: [app6](./app6/app.ts)

The result is that when defining an object that will be passed to a function
that demands an interface, the methods listed in the interface must be
implemented in the object, same as the properties, as `getGreeting()` is
implemented in this one.

## Interfaces and Classes
link: [app7](./app7/app.ts)

You must implement what the interface declares at a minimum with any class
that implements it.

## Extending Interfaces
link: [app8](./app8/app.ts)

INinja interface extends the IPerson interface. Also, the `as` keyword tells
the TypeScript type checker to treat an object as being of a given type. This
allows an empty object to be assigned a type.

## Namespaces and Modules
### Namespace
A namespace is, simply put, an object that contains other code.

link: [app9](./app9/app.ts)

Inside the block, anything you define is only accessible within that namespace
unless you `export` it. As you can see, you can `export` variables and
functions, both of which you can then access as follows:

link: [app10](./app10/app.ts)


