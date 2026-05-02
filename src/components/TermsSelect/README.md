# TermSelect

The `TermsSelect` component allows for selecting multiple terms from wanted taxonomy using `<FormTokenField>` component.

## Usage

For a minimum working setup, you need to define `termIDs` attribute and pass an taxonomy as `taxonomyName` and other `props`.

```js
import { TermsSelect } from '@meom/block-components';

// Inside block `edit` function:
const {
    attributes: {},
    setAttributes,
} = props;

// `category` can be any taxonomy name.
<TermsSelect
    taxonomyName="category" {...props}
/>
```

## `termIds`

Term ID array.

Remember to define `termIds` in `block.json` file as attribute:

```json
"attributes": {
    "termIds": {
        "type": "array",
        "default": []
    },
}
```
