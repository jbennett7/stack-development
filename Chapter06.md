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

