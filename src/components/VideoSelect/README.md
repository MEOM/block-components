# VideoSelect

The `VideoSelect` component allows for selecting a single video from the Media Library.
Internally, `VideoSelect` is wrapping a [`MediaPlaceholder`](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/media-placeholder/index.js) component.

## Usage

For a minimum working setup, you need to pass an video object as `video`, as well as an `onChange` callback that accepts an video object.

```js
import { VideoSelect } from '@meom/block-components';

// Inside block `edit` function:
const {
    attributes: { video },
    setAttributes,
} = props;

<VideoSelect
    video={video}
    onChange={(newVideo) =>
        setAttributes({ video: newVideo })
    }
/>
```

## Props

The `VideoSelect` component has custom props `buttonText`, `videoAttributes`, `video` and `onChange`  for managing the video.

### `buttonText`

Example:

```js
import { VideoSelect } from '@meom/block-components';

// Inside block `edit` function:
const {
    attributes: { video },
    setAttributes,
} = props;

<VideoSelect
    buttonText={'Change Video'}
    video={video}
    onChange={(newVideo) =>
        setAttributes({ video: newVideo })
    }
/>
```

The button text to remove and replace the video.

- Type: `string`
- Required: No
- Default: `Remove Video`

### `videoAttributes`

Example:

```js
import { VideoSelect } from '@meom/block-components';

// Inside block `edit` function:
const {
    attributes: { video },
    setAttributes,
} = props;

// Overwrite default video attributes.
const videoAttributes = {
    height: 160,
    width: 160,
    autoPlay: true
};

<VideoSelect
    videoAttributes={videoAttributes}
    video={video}
    onChange={(newVideo) =>
        setAttributes({ video: newVideo })
    }
/>
```

- Type: `object`
- Required: No
- Default: `{ autoPlay: true, muted: true, loop: true }`


### `onChange`

The callback to use for handling changing the video.
Please note that `onChange` will receive an video object from the Media Library.

### `video`

An video object.

Remember to define `video` in `block.json` file as attribute:

```json
"attributes": {
    "video": {
        "type": "object"
    }
}
```
