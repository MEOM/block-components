# Block Components

> Reusable components, hooks and helper functions for the WordPress block editor.


## Introduction

The Block Editor Components package provides reusable components, hooks and helper functions to use with the WordPress block editor.
This is **not** a WordPress plugin or other production-use library.
Instead, the package is intended to be used as development-time dependency, contributing to your plugin or project codebase build.

## Installation

The recommended way to use the Block Components package is to install as a node dependency.


```shell
npm install @meom/block-components
```

**Note:** As the Block Editor Components package provides a variety of components, hooks and utils that you usually don't all need for a given project, the package does **not** declare any `@wordpress/*` dependencies.
This means that you need to ensure all dependency assets are declared and loaded.

One way to ensure all dependencies are loaded is to use the [`@wordpress/dependency-extraction-webpack-plugin`](https://github.com/WordPress/gutenberg/tree/trunk/packages/dependency-extraction-webpack-plugin) package.

## Components

- [`ImageSelect`](src/components/ImageSelect)
- [`VideoSelect`](src/components/VideoSelect)

## Contributing

See the [contribution guidelines](CONTRIBUTING.md) for more information.

## Inspiration and other block components

- [Human Made Block Editor Components](https://github.com/humanmade/block-editor-components/)
- [10up Block Components](https://github.com/10up/block-components/)
