# strongback-react
Strongback is an implementation of the Red Arrow Labs pattern library.

The goal: an opinionated, "Don't Make Me Think", batteries-included front-end toolkit focused on Developer Experience.

The use case: enterprise applications, built by teams of developers who
have varying amounts of front-end experience.

# Usage

## Install
`npm install --save @redarrowlabs/strongback-react`
## Import
`import { Button } from '@redarrowlabs/strongback-react';`

TypeScript declarations are included, so intellisense should work
out of the box. 

## Examples
Clone the repo and run the storybook, 
or browse the sources at `/src/[package]/[package].story.tsx`

# Developing
- `npm run storybook` Launches a storybook server on `localhost:9001`

# Contributing
1. Create or discuss an [issue](https://github.com/redarrowlabs/strongback/issues)
1. Develop on your feature branch.
1. Pull and merge.
1. `npm run check` to make sure everything's building.
1. Send a PR!
1. `npm version [patch | minor | major]` to bump and tag.
1. `npm publish` (Must be logged in as RAL)
