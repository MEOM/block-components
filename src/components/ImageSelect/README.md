# ImageSelect

The `ImageSelect` component allows for selecting a single image from the Media Library.
Internally, `ImageSelect` is wrapping a [`MediaPlaceholder`](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/media-placeholder/index.js) component.

## Usage

For a minimum working setup, you need to pass an image object as `image`, as well as an `onChange` callback that accepts an image object.

```js
import { ImageSelect } from '@meom/block-components';

// Inside block `edit` function:
const {
    attributes: { image },
    setAttributes,
} = props;

<ImageSelect
    image={image}
    onChange={(newImage) =>
        setAttributes({ image: newImage })
    }
/>
```

## Props

The `ImageSelect` component has custom props `buttonText`, `image` and `onChange`  for managing the image.

### `buttonText`

The button text to remove and replace the image.

- Type: `string`
- Required: No
- Default: `Remove Image`


### `onChange`

The callback to use for handling changing the image.
Please note that `onChange` will receive an image object from the Media Library.

### `image`

An image object.

Remember to define `image` in `block.json` file as attribute:

```json
"attributes": {
    "image": {
        "type": "object"
    }
}
```
