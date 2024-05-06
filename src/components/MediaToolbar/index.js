import { __ } from '@wordpress/i18n';
import {
    MediaReplaceFlow,
    MediaUpload,
    MediaUploadCheck,
    BlockControls,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

const MEDIA_LABEL = __( 'Media', 'meom-block-components' );
const REPLACE_BUTTON_TEXT = __( 'Replace Image', 'meom-block-components' );
const REMOVE_BUTTON_TEXT = __( 'Remove Image', 'meom-block-components' );
const ADD_BUTTON_TEXT = __( 'Add Image', 'meom-block-components' );

/**
 * MediaToolbar
 *
 * This is a helper component that adds the Media Replace Flow
 * with some buttons to add or remove an image.
 *
 * This should be used on components that have optional images.
 *
 * Component got from https://github.com/10up/block-components/tree/develop/components/media-toolbar
 *
 * @param {Object} props options
 * @return {React.ReactElement} markup of the ToolbarGroup
 */
export const MediaToolbar = ( props ) => {
    const { onSelect, onRemove, isOptional = true, id } = props;

    const hasImage = !! id;
    const { media } = useMedia( id );

    return (
        <BlockControls>
            <ToolbarGroup label={ MEDIA_LABEL }>
                { hasImage ? (
                    <>
                        <MediaReplaceFlow
                            mediaUrl={ media?.source_url }
                            onSelect={ onSelect }
                            name={ REPLACE_BUTTON_TEXT }
                        />
                        { !! isOptional && (
                            <ToolbarButton onClick={ onRemove }>
                                { REMOVE_BUTTON_TEXT }
                            </ToolbarButton>
                        ) }
                    </>
                ) : (
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ onSelect }
                            render={ ( { open } ) => (
                                <ToolbarButton onClick={ open }>
                                    { ADD_BUTTON_TEXT }
                                </ToolbarButton>
                            ) }
                        />
                    </MediaUploadCheck>
                ) }
            </ToolbarGroup>
        </BlockControls>
    );
};

export function useMedia( id ) {
    return useSelect(
        ( select ) => {
            const { getMedia, isResolving, hasFinishedResolution } =
                select( coreStore );

            const mediaParameters = [ id, { context: 'view' } ];

            return {
                media: getMedia( ...mediaParameters ),
                isResolvingMedia: isResolving( 'getMedia', mediaParameters ),
                hasResolvedMedia: hasFinishedResolution(
                    'getMedia',
                    mediaParameters
                ),
            };
        },
        [ id ]
    );
}
