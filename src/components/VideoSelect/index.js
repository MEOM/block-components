import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { MediaPlaceholder } from '@wordpress/block-editor';

const BUTTON_TEXT = __( 'Remove Video', 'meom-block-components' );
const VIDEO_ATTRIBUTES = { autoPlay: true, muted: true, loop: true };
const VIDEO_TYPE = 'video/mp4';

/**
 * Video select control.
 *
 * @param {Object} props - Component props.
 * @return {Node} Component.
 */
function VideoSelect( props ) {
    const {
        video,
        onChange,
        buttonText = BUTTON_TEXT,
        videoAttributes = VIDEO_ATTRIBUTES,
        videoType = VIDEO_TYPE,
    } = props;

    const videoId = video && video.id;
    const videoUrl = video && video.url;

    return (
        <>
            { ! videoId ? (
                <MediaPlaceholder
                    onSelect={ ( { id, url } ) => {
                        onChange( { id, url } );
                    } }
                    allowedTypes={ [ 'video' ] }
                ></MediaPlaceholder>
            ) : (
                <>
                    <video { ...videoAttributes }>
                        <source src={ videoUrl } type={ videoType } />
                    </video>

                    <Button
                        className="meom-media-button button button-large"
                        onClick={ () => onChange( null ) }
                    >
                        { buttonText }
                    </Button>
                </>
            ) }
        </>
    );
}

export default VideoSelect;
