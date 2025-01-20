# ImageSelect

The `ImageSelect` component allows for selecting a single image from the Media Library.
Internally, `ImageSelect` is wrapping a [`MediaPlaceholder`](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/media-placeholder/index.js) component.

## Usage

For a minimum working setup, you need to pass an image object as `image`, as well as an `onChange` callback that accepts an image object.

If focal point setter is needed, then you need to

-   set `useFocalPoint` to `true`.
-   add `focalPoint` attribute and `onChangeFocalPoint` callback that handles updating focal point value.

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
    useFocalPoint={true}
    focalPoint={focalPoint}
    onChangeFocalPoint={(newFocalPoint) =>
        setAttributes({ focalPoint: newFocalPoint })
    }
/>;
```

## Props

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

### `showRemoveImageButton`

Example:

```js
import { ImageSelect } from '@meom/block-components';

// Inside block `edit` function:
const {
    attributes: { image },
    setAttributes,
} = props;

<ImageSelect
    showRemoveImageButton={false}
    image={image}
    onChange={(newImage) => setAttributes({ image: newImage })}
/>;
```

Property to decide if remove image button want's to be shown.

-   Type: `boolean`
-   Required: No
-   Default: `true`

### `settingsText`

The button text for image settings. For example focalpoint picker.

-   Type: `string`
-   Required: No
-   Default: `Image settings`

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

### `useMediaToolbar`

Boolean which determines do we use `MediaToolbar` in this image.

-   Type: `boolean`
-   Required: No
-   Default: `true`


```js
// Hide `MediaToolbar`.
<ImageSelect
    useMediaToolbar={false}
    image={image}
    onChange={(newImage) => setAttributes({ image: newImage })}
/>;
```

### `useFocalPoint`

Boolean which determines do we use focalpoint in this image.

-   Type: `boolean`
-   Required: No
-   Default: `false`

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

### `focalPointLabel`

The focalpoint label.

-   Type: `string`
-   Required: No
-   Default: `Image focalpoint`

### `focalPointHelp`

The focalpoint label helper text.

-   Type: `string`
-   Required: No
-   Default: `Pick image focalpoint which is central point of the image.`

## How to use focalpoint in PHP

Note that `attr` is custom function for getting the attribute. Here is an example how to use focalpoint in PHP. You may want to add the function to helpers.php.

```php
$focal_point       = attr( 'focalPoint', $attributes, [ 'x' => 0.5, 'y' => 0.5 ] );
$focal_point_style = get_focal_point_style( $focal_point );

wp_get_attachment_image( $image_id, 'full', '', [ 'loading' => 'eager', 'style' => esc_attr( $focal_point_style ) ] );

/**
 * Get css object-position attribute by focal point
 *
 * @param $focal_point array
 *
 * @return string
 */
function get_focal_point_style( $focal_point ) {
    if ( ! $focal_point || ! is_array( $focal_point ) ) {
        return '';
    }

    $focal_point_x = array_key_exists( 'x', $focal_point ) ? $focal_point['x'] * 100 : false;
    $focal_point_y = array_key_exists( 'y', $focal_point ) ? $focal_point['y'] * 100 : false;

    if ( $focal_point_x !== false && $focal_point_y !== false ) {
        return "object-position: {$focal_point_x}% {$focal_point_y}%";
    }

    return '';
}
```
