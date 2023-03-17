# PostSelect

The `PostSelect` component allows for selecting a single posts from wanted post type using `<select>`.

## Usage

For a minimum working setup, you need to define `postId` attribute and pass an taxonomy as `postTypeName` and other `props`.

```js
import { PostSelect } from '@meom/block-components';

// Inside block `edit` function:
const {
    attributes: {},
    setAttributes,
} = props;

// `service` can be any post type slug.
<PostSelect
    postTypeName="service" {...props}
/>
```

## `postId`

Post ID string.

Remember to define `postId` in `block.json` file as attribute:

```json
"attributes": {
    "postId": {
        "type": "string"
    }
}
```
