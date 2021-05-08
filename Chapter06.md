# Chapter 6 A Few More Words: Advanced TypeScript

## Interfaces
All of the code can be compiled via TypeScript:
```
npm --save-dev install typescript
tsc app.ts
```

A simple TypeScript example: [app1](./ch06/app1/app.ts). This should work, with
the output from the browser being a pop up alert saying __"Hello, Frank"__, but
what if the `person` object did not have a `firstName` property? Then we would
see __"Hello, undefined"__.

Interfaces are contracts that the code must adhere to. [app2](./ch06/app2/app.ts)
demonstrates how its used. In this case the interface is defined directly
inline in the argument list of the `greet()` function.

You can also define the interface separately. This can be seen in
[app3](./ch06/app3/app.ts).

The object you pass to `greet()` can have _other_ properties not named in the
interface. It has to have those defined by the interface, though, or the
contract isn't met.

However, if you pass an object literal, as seen in [app4](./ch06/app4/app.ts), you
will get a compile error.

Optional parameters can be defined by adding a `?` after the property's name as
found in [app5](./ch06/app5/app.ts).

### Methods in Interfaces
Methods can also be defined in interfaces as well as shown in
[app6](./ch06/app6/app.ts).

The result is that when defining an object that will be passed to a function
that demands an interface, the methods listed in the interface must be
implemented in the object, same as the properties, as `getGreeting()` is
implmented in this one.

## Interfaces and Classes
In most object-oriented languages that provide classes and interfaces, classes
can implement interfaces to ensure they provide a given contract, and TypeScript
is no different, as shown in [app7](./ch06/app7/app.ts).

You must implment what the interface declares at a minimum with any class that implements it.

## Extending Interfaces
Interfaces can be extended as shown in [app8](./ch06/app8/app.ts).

Here, you can see how the `INinja` interface extends the `IPerson` interface.
Something else you can see is the use of the `as` keyword. This tells the
TypeScript type checker to treat an object as being of a given type. An empty
object, as `ninja` starts out as, isn't an `INinja` automatically as far as
TypeScript knows. It's just a plain old object, after all. But, when you say
`as INinja`, that's telling TypeScript exactly what type you want that object
to be treated as for the purposes of type checking at compilation time.

It's a good idea to explicitly type using `as` in cases like this where the
type isn't implicit anyway, such as when instantiating a class.

| :memo" | Interfaces do not get compiled to JavaScript in any way, shape, or form. They are entirely a TypeScript construct used at compile time. |
|-|:-|

## Namespaces and Modules

### Namespaces
An object that contains other code.

A namespace is easy to create:
```
namespace MyFirstNamespace {
  export let homeworld = "Jakku";
  export function sayName() { alert("Rey"); };
}
```
Inside the block, anything you define is only accessible within that namespace
unless you `export` it. You can export variables and functions and access them:
```
alert(MyFirstNamespace.homeworld);
MyFirstNamespace.sayName();
```

You can also `export` classes and interfaces from a namespace:
```
namespace MyFirstNamespace {
  export class Jedi {}
  export interface RebelScum {}
}
```
[app9](./ch06/app9/app.ts) shows namespaces in action.

As you can see, TypeScript uses the IIFE (Immediately Invoked Function Expression)
pattern to keep the namespace's contents separate from everything else on the
page when the code finally executes, thereby keeping global scope nice and
clean (aside from the namespace object itself, obviously).

Namespaces are helpful to organize code that span multiple files.
For the following we have [app.ts](./ch06/app10/app.ts),
[file1.ts](./ch06/app10/file1.ts) and [file2.ts](./ch06/app10/file2.ts).

To get this to work we need to get TypeScript to bundle the files together:
`tsc --outFile main.js file1.ts file2.ts app.ts`.

| :memo: | When bundling like this, be aware that order can matter. |
|-|:-|

In the file you will notice
```
/// <reference path="file1.ts" />
/// <reference path="file2.ts" />
```
This will take care of the ordering.

### Modules
A module is defined as any TypeScript source file that contains one or more
`import` or `exprt` statements at the top level (meaning not inside a
function). Any source file contents will be made available in global scope
like always.

Modules represent their own scope, represent their own scope, which means
anything inside the module is not visible to anything outside the module
unless explicitly exported.

An example can be found in [app11](./ch06/app11/)

### Decorators
Decorators are essentially metadata that you can add to the definition of a
number of code elements. If you've ever seen annotations in other languages,
like Java, then you are already familiar with the basic concept. Decorators are
expressed in the form `@<name>`, where name must evaluate to a function at
runtime. This function will be passed information about the element decorated.

Decorators are experimental, when you use them you need to use the
`--experimentalDecorators` switch to `tsc`.

A class decorator like this is always passed just the constructor, but remember
that it's the _runtime_ constructor, which is why we get the entire `Spaceship`
function and not the constructor defined at the source level.

An example can be found in [app12](./ch06/app12/app.ts)

Decorator Types:
* Method
* Accessor
* Property
* Parameter

### Decorator Factories
Sometimes you'll want to be able to pass information to a decorator in order to
vary what the decorator does. To achieve this, you can create a decorator
_factory_.

[app13](./ch06/app13/app.ts)


### Third-Party Libraries

### Debugging TypeScript Apps

### Source Maps
