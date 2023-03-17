# TermSelect

The `TermSelect` component allows for selecting a single terms from wanted taxonomy using `<select>`.

## Usage

For a minimum working setup, you need to define `termID` attribute and pass an taxonomy as `taxonomyName` and other `props`.

```js
import { TermSelect } from '@meom/block-components';

// Inside block `edit` function:
const {
    attributes: {},
    setAttributes,
} = props;

// `category` can be any taxonomy name.
<TermSelect
    taxonomyName="category" {...props}
/>
```

## `termId`

Term ID string.

Remember to define `termId` in `block.json` file as attribute:

```json
"attributes": {
    "termId": {
        "type": "string"
    }
}
```
