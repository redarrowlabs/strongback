# strongback-react
Strongback is an implementation of the Red Arrow Labs pattern library.

The goal: an opinionated, "Don't Make Me Think", batteries-included front-end toolkit focused on Developer Experience.

The use case: enterprise applications, built by teams of developers who
have varying amounts of front-end experience.

# Usage
## Knowledge
These tools are highly recommended for your app. (but not strictly required)
- [TypeScript](www.typescriptlang.org) - A typed, compiled JavaScript variant.
- [React](https://facebook.github.io/react/) - Declarative view library. Puts markup in your code.
- [Redux](https://github.com/reactjs/redux) - Unidirectional, testable state management library.
- [Webpack](http://webpack.github.io/docs/) - JavaScript bundler, pulling your imported code into one distributable file.

## Install
`npm install --save @redarrowlabs/strongback-react`
## Import
`import { Button } from '@redarrowlabs/strongback-react';`

or

`const { Button } = require('@redarrowlabs/strongback-react');`

TypeScript declarations are included, so intellisense should work
out of the box. 

# Developing
- `npm run storybook` Launches a storybook server on `localhost:9001`

# Contributing
1. Develop on your feature branch.
1. Pull and merge.
1. `npm run check` to make sure everything's building.
1. Send a PR!
1. `npm version [patch | minor | major]` to bump and tag.
1. `npm publish` (Must be logged in as RAL)

# 🙋 Strongback?
A strongback lifts a rocket from horizontal to vertical, and supplies it with power and chilled rocket fuel until it's time to launch.

[Picture](http://www.spacex.com/sites/spacex/files/crs-3_staticfire.jpg)

See also [Ignition](https://github.com/redarrowlabs/ignition)