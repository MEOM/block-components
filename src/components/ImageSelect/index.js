import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { MediaPlaceholder } from '@wordpress/block-editor';

const BUTTON_TEXT = __('Remove Image', 'meom-block-components');

/**
 * Image select control.
 *
 * @param {Object} props - Component props.
 * @return {Node} Component.
 */
function ImageSelect(props) {
    const { image, onChange, buttonText = BUTTON_TEXT } = props;
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
                        {buttonText}
                    </Button>
                </>
            )}
        </>
    );
}

export default ImageSelect;
