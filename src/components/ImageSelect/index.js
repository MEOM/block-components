import { __ } from '@wordpress/i18n';
import { Button, FocalPointPicker, PanelBody } from '@wordpress/components';
import { MediaPlaceholder, InspectorControls } from '@wordpress/block-editor';

const BUTTON_TEXT = __('Remove Image', 'meom-block-components');

/**
 * Image select control.
 *
 * @param {Object} props - Component props.
 * @return {Node} Component.
 */
function ImageSelect(props) {
    const {
        image,
        onChange,
        buttonText = BUTTON_TEXT,
        focalPoint = { x: 0.5, y: 0.5 },
        onChangeFocalPoint,
        ...rest
    } = props;

    const imageId = image && image.id;
    const imageUrl = image && image.url;

    const focalPointStyle = {
        objectFit: 'cover',
        objectPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
    };

    // Set style changes from focalPointStyle object and use it with image.
    rest.style = {
        ...rest.style,
        ...focalPointStyle,
    };

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
                    <InspectorControls>
                        <PanelBody title={__('Kuvan asetukset')}>
                            <FocalPointPicker
                                label={__('Kuvan keskipiste')}
                                help={__(
                                    'Valitse kuvalle keskipiste, jonka haluat ainakin näkyvän kuvassa'
                                )}
                                url={imageUrl}
                                value={focalPoint}
                                onChange={onChangeFocalPoint}
                            />
                        </PanelBody>
                    </InspectorControls>
                    <img src={imageUrl} alt="" {...rest} />

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
