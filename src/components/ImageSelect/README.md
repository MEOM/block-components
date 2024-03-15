# ImageSelect

The `ImageSelect` component allows for selecting a single image from the Media Library.
Internally, `ImageSelect` is wrapping a [`MediaPlaceholder`](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/media-placeholder/index.js) component.

## Usage

For a minimum working setup, you need to pass an image object as `image`, as well as an `onChange` callback that accepts an image object.

If focal point setter is needed, then you need to add `focalPoint` attribute and `onChangeFocalPoint` callback that handles updating focal point value.

```js
import { ImageSelect } from '@meom/block-components';

// Inside block `edit` function:
const {
    attributes: { image, focalPoint },
    setAttributes,
} = props;

<ImageSelect
    image={image}
    onChange={(newImage) => setAttributes({ image: newImage })}
    focalPoint={focalPoint}
    onChangeFocalPoint={(newFocalPoint) =>
        setAttributes({ focalPoint: newFocalPoint })
    }
/>;
```

## Props

The `ImageSelect` component has custom props `buttonText`, `image` and `onChange` for managing the image.

Focal point can be added with custom props `focalPoint` and `onChangeFocalPoint`

### `buttonText`

Example:

```js
import { ImageSelect } from '@meom/block-components';

// Inside block `edit` function:
const {
    attributes: { image },
    setAttributes,
} = props;

<ImageSelect
    buttonText={'Change Image'}
    image={image}
    onChange={(newImage) => setAttributes({ image: newImage })}
/>;
```

The button text to remove and replace the image.

-   Type: `string`
-   Required: No
-   Default: `Remove Image`

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

### `focalPoint`

An object that includes `x` and `y` coordinates as percentage. Values should be set between 0 and 1.

```json
"attributes": {
    "focalPoint": {
        "type": "object",
        "default": {
           "x": 0.5,
           "y": 0.5
        }
    }
}
```

### `onChangeFocalPoint`

The callback to use for handling focal point percentage change.
Callback should update `focalPoint` attribute values with new `x` and `y` percentages between values 0 and 1.
