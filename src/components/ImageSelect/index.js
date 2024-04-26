import { __ } from '@wordpress/i18n';
import { Button, FocalPointPicker, PanelBody } from '@wordpress/components';
import { MediaPlaceholder, InspectorControls } from '@wordpress/block-editor';
import { MediaToolbar } from '../MediaToolbar';

const SETTINGS_TEXT = __('Image settings', 'meom-block-components');
const FOCALPOINT_LABEL = __('Image focalpoint', 'meom-block-components');
const FOCALPOINT_HELP = __(
    'Pick image focalpoint which is central point of the image.',
    'meom-block-components'
);
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
        settingsText = SETTINGS_TEXT,
        showRemoveImageButton = true,
        buttonText = BUTTON_TEXT,
        useFocalPoint = false,
        focalPointLabel = FOCALPOINT_LABEL,
        focalPointHelp = FOCALPOINT_HELP,
        focalPoint = { x: 0.5, y: 0.5 },
        onChangeFocalPoint,
        ...rest
    } = props;

    const imageId = image && image.id;
    const imageUrl = image && image.url;

    if (useFocalPoint) {
        const focalPointStyle = {
            objectFit: 'cover',
            objectPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
        };

        // Set style changes from focalPointStyle object and use it with image.
        rest.style = {
            ...rest.style,
            ...focalPointStyle,
        };
    }

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
                    {useFocalPoint && (
                        <InspectorControls>
                            <PanelBody title={settingsText}>
                                <FocalPointPicker
                                    label={focalPointLabel}
                                    help={focalPointHelp}
                                    url={imageUrl}
                                    value={focalPoint}
                                    onChange={onChangeFocalPoint}
                                />
                            </PanelBody>
                        </InspectorControls>
                    )}
                    <MediaToolbar
                        id={imageId}
                        onSelect={({ id, url }) => {
                            onChange({ id, url });
                        }}
                        onRemove={() => {
                            onChange(null);
                        }}
                    />
                    <img src={imageUrl} alt="" {...rest} />

                    {showRemoveImageButton && (
                        <Button
                            className="meom-media-button button button-large"
                            onClick={() => onChange(null)}
                        >
                            {buttonText}
                        </Button>
                    )}
                </>
            )}
        </>
    );
}

export default ImageSelect;
