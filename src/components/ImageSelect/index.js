const { __ } = wp.i18n;
const { Button } = wp.components;
const { MediaPlaceholder } = wp.blockEditor;

/**
 * Image select control.
 *
 * @param {Object} props - Component props.
 * @return {Node} Component.
 */
function ImageSelect(props) {
    const { image, onChange } = props;
    const imageId = image && image.id;
    const imageUrl = image && image.url;

    return (
        <>
            {!imageId ? (
                <MediaPlaceholder
                    onSelect={({ id, url }) => {
                        onChange({ id, url });
                    }}
                    allowedTypes={['image']}
                ></MediaPlaceholder>
            ) : (
                <>
                    <img src={imageUrl} alt="" />

                    <Button
                        className="meom-media-button button button-large"
                        onClick={() => onChange(null)}
                    >
                        {__('Poista kuva', 'meom-gutenberg')}
                    </Button>
                </>
            )}
        </>
    );
}

export default ImageSelect;
