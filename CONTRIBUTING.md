Block Editor Components - Contribution Guide
===

## Process

* Create a feature branch from `main`.
* Work on your branch locally.
* Open a pull request against [`meom/block-components`](https://github.com/meom/block-components).
* Pull requests should be reviewed and merged by MEOM.

## Local Development

You can contribute to Block Editor Components whilst working on a project that is using it with [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link).

Setting this up is a two-part process.
First, clone the block editor components repository and link it locally.

```shell
# Clone this repo into a new directory (completely separate from any project).
git clone git@github.com:meom/block-components.git

# Change to the block editor components directory.
cd block-components

# Install dependencies and build.
npm ci && npm run build

# Link this package.
npm link
```

Next, from your project root directory, run:

```shell
npm link @meom/block-components
```

Now, your project will use a version of `block-components` that is symlinked from the repo you just cloned.
You can check out a new feature branch, work on a change, and test it within a real project.

When you're done, you can unlink the package by running the following:

```shell
npm unlink @meom/block-components
```

### Automatic Build

Whilst developing, it is useful have Webpack watch for changes and rebuild the distributed files automatically.
To do this, run:

```shell
npm run start
```
