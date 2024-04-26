# MediaToolbar

The `MediaToolbar` component adds replace and remove buttons to image block toolbar. Compatible and used with ImageSelect component.

## Usage

For a minimum working setup, you need to define `id` attribute and set `onSelect` and `onRemove` functions.

Example on ImageSelect component:

```js
import { MediaToolbar } from '@meom/block-components';

// Inside ImageSelect `index` file:
function ImageSelect(props) {
    const {
        image,
        onChange,
    } = props;

    const imageId = image && image.id;
    const imageUrl = image && image.url;

    return (
        <>
            {!imageId ? (
                // If image not set..
                // Insert code
            ) : (
                <>
                    <MediaToolbar
                        id={imageId}
                        onSelect={({ id, url }) => {
                            onChange({ id, url });
                        }}
                        onRemove={() => {
                            onChange(null);
                        }}
                        isOptional={true}
                    />
                    <img src={imageUrl} alt="" />
                </>
            )}
        </>
    );
}

export default ImageSelect;
```

## Properties

### `id`

Image id int.

### `onSelect`

onSelect function to update media id and url.

### `onRemove`

onRemove function to remove selected image.

### `isOptional`

isOptional boolean.
Default: true

If `isOptional` is set to false, component removes `Replace Image` button from block toolbar.
