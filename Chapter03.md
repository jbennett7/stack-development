# Chapter 3 Client-Side Adventures: React
## A Brief History of React
React, in simplest terms, is a library for building web-based user interfaces.

Pete, along with Jordan, got React open sourced in May 2013.

## What is React
React makes it easy to reason about the structure of your interface at any
given moment in time. This is accomplished by way of components, which you can
think of as self-contained pieces of the interface. Combine a whole bunch of
widgets and you have yourself a user interface.

React supplies just four things:
* components
* props
* state
* style

DOM, or Document Object Model, is the tree structure that the browser builds as
it parses your HTML.

React uses the concept of a virtual DOM. This secondary DOM that sits
conceptually _on top_ of the real DOM in memory. Rather than manipulate the
real DOM directly, you instead allow React to mediate the changes that could
occur to the page.

## The Real Star of the Show: Components
[Listing 3-1](./ch03/listing3_1.html)

A CDN is used to download the main React code (`react.development.js`) as well
as the react-dom package, which you can thinkof as the bridge between React
itself and the browser's DOM.

React can talt to different renderers, which are the bits of code that produce
the visual output. It might be possible to have a renderer that produces, say,
bitmap images for display in a desktop operating system, allowing you to write
desktop apps with React. The react-dom package is that but targeting the browser
DOM and HTML. Note that for both, the development builds are referenced and not
the production builds. This aids in debugging during development.

[This page](./ch03/listing3_2.html) has more on the page.

React elements are created using:
`React.createElement(type, {props}, ...children);`. This is the smallest building
block of the visual interface of a React app.

[Creating components](./ch03/listing3_3.html).

The `Bookmark` class is how we define a proper React component, which is why it
extends the `React.Component` class.

The `render()` method, which is the only thing your component is _required_ to
contain, is responsible for returning one of several things:
* Another React component
* A React element
* An array of either of those
* A fragment
* A portal (a more advanced topic that won't be covered in this book)
* A stringg or a number (these are rendered as plain text nodes in the DOM)
* A boolean or null (results in _nothing_ being rendered)

The `this.props` member will be present on any component thanks to React, and
React populates it for you when you use the component using whatever you pass
as the second argument to `React.createElement()`, and you can use the data in
props as appropriate inside the component.

## Components Need Info: Props
Properties (`props` for short), is how information is passed into components.

Three things to remember about props:
1. They are always passed down from a parent component to a child.
2. props are only given to the child component when it's being created.
3. props are immutable.

Whenever a change must occur to a component, React will re-render part of the
DOM tree. React will determine what components need to be re-rendered when
state changes. Not just re-rendered, but destroyed and recreated from scratch.

props cannot be changed once they are passed to the child and the component is
created with them. They are destroyed and recreated with all new prop values.

## Components (Sometimes) Need Memory: State
Changes to state do not cause React to destroy and recreate a component.
Instead, it will change just the tiniest portion of the virtual DOM tree that
the change demands, and then the minimum real DOM chagnes will result.

[The Bookmark class, and React component](./Ch03/listing3_4.html)

Two reasons why you should have constructors:
1. So that when you try this code out, you will see that when state changes,
   the constructor does not fire after the two initial times (one per `Bookmark`
   in the tree), proving that state changes don't result in component recreation.
2. In the line where `title` is set as a member variable, and its initial value
   is taken from the props that are passed in. This variable becomes the state
   of this `Bookmark` component.

There are no rules with how you store the state inside your component. Many
people choose to have a single `state` variable that is an object that containes
all the state for the component, and I frankly tend to do that too. but it can
simply be "naked" class members like this too.

You inform React that state has changed with the `setState()` method. The
argument passed to `setState()` is one of two things: either a function or an
object.

If it's a function, it is called an _updater function_. This function receives
two arguments: the current state of the object and its props. This function
returns an object that will be the new state of the component. It's important to
understand that this function cannot mutate the state object passed in. It must
create a new object and return it.

You can also pass an object to `setState()`. In
[Listing 3-4](./ch03/listing3_4.html#L28) an empty object is passed in. What
this does causes React to perform a shallow merge of the object with the
component's current state.

| :memo: | It is safer to use an updater function than an empty object with `setState()`. |
|-|:-|

`setState()` is asynchronous and can be passed a second argument, a callback
function. This function will be called after the update has occurred.

| :memo: | Any component that has state is called a _stateful_ component.In contrast, any component that has no state is called a _stateless_ component. |
|-|:-|

## Making Them Look Good: Style
Now, at the end of the day, when building an app with React we're still takling
about HTML, JavaScript, and CSS.

If we want to make the color of our `Bookmark` titles red:
```
<style>
  h2 {
    color : red;
  }
</style>
```

Alternatively we can explicitly name a CSS class to use in the component's code.
```
<style>
  .bookmarkTitle {
    color : red;
  }
</style>
```

The call to `React.createElement()` that creates the `<h2>` for the title:
```
React.createElement("h2", { className : "bookmarkTitle" }, this.title)
```

It could asl be defined inline:
```
React.createElement("h2", { style : { color : "red" } }, this.title)
```
A better way still is to take the inline definition and assign it to
a variable:
```
const bookmarkTitle = { color : "red" }

React.createElement("h2", { style : this.bookmarkTitle }, this.title)
```

Down this path, you could take all your style objects and enter them in a
`styles.js` file and deal with CSS in a flexible way.

[Listing 3-5](./ch03/listing3_5.html) is the Bookmark component, now with
a style.
