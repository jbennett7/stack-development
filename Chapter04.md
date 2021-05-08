#  Chapter 4 A Few More Words: Advanced React

## A Better Way to Write React Code: JSX
JSX, JavaScript XML, is an extension to the JavaScript language that adds XML
syntax to the language. It allows us to embed XML inside JavaScript without
having to resort to things like string concatenation or even DOM methods.

JSX allows us to define tree structures with attributes in a more elegant way
than all the JavaScript function calls.

JSX is _not_ part of JavaScript. It requires a preprocessing step.

The usefulness of JSX is that it provides a more natural way into the world of
React by allowing them not to have to think in terms of `React.createElement()`
but in something more akin to what they're already familiar with.

### JSX in Action
A simple example using a `MaterialButton` component:
```
const button = <MaterialButton color="red"
  onClick="alert('clicked');">
  ClickMe
</MaterialButton>;
```
The preprocessed output would look like:
```
React.createElement(
  MaterialButton,
  { color : "red",
    onClick : function() { alert('clicked'); }
  },
  "Click Me"
)
```

If you embed components in JSX:
```
const button = <MaterialButton color="red"
  onClick="alert('clicked');">
  <ButtonLabel text="Click Me" />
</MaterialButton>;
```
This compiles to:
```
React.createElement(
  MaterialButton,
  { color : "red",
    onClick : function() { alert('clicked'); }
  },
  React.createElement(ButtonLabel, { text : "Click Me" })
)
```

### A Slight Detour into Babel Land
Babel allows you to accommodate multiple browsers and ensure the use of newer
features of JavaScript do not break when used in browsers that don't implement
those features.

_polyfill_ describes when every new feature of a language can be refactored
and written using earlier language features, often with some compromises.

To install Babel: `npm install --save-dev @babel/core @babel/cli`

You can issue the command `npx babel`. The `npx` command is installed along
with newer versions of NPM.

You usually run Babel with a file. Using [test.js](./ch04/babel/test.js), as an
example, you would execute: `npx babel test.js` and it would transpile it.

However, out-of-the-box Babel doesn't do anything. You have to add some plugins
such as: `npm install --save-dev @babel/plugin-transform-arrow-functions`

Then you have to tell Babel to use that plugin in `.babelrc`
```
{
  "plugins": ["@babel/plugin-transform-arrow-functions"]
}
```
You can save the output to a file: `npx babel test.js --out-file test_new.js`

Babel provides a number of _presets_ that group plugins together. Two most
common are: `env` and `react`.
```
{ "presets": [
    [ "@babel/preset-env", {
      "targets" : {
        "browsers" : [ "last 3 versions", "safari >= 6" ]
      }
    }]
  ]
}
```

### Compile JSX
To install the `react` preset plugin: `npm install @babel/preset-react --save-dev`

And the `.babelrc` file:
```
{ "presets" : [
    [ "@bael/preset-react" ]
  ]
}
```

| :memo: | You only need the `react` preset, you don't need the `env` preset. |
|-|:-|

For [test.jsx](./ch04/jsx/test.jsx), you can transpile the code using Babel:
`npx babel test.jsx`

###And Now, Put It All Together
The file [index.html](./ch04/combine/index.html) references `main.js` which
is transpiled via `npx babel [main.jsx](./ch04/combine/main.jsx)`. Now you can
open the [index.html](./ch04/combine/index.html) file in a browser.
