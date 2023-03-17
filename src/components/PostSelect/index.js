/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SelectControl, Spinner } from '@wordpress/components';
import { useEntityRecords } from '@wordpress/core-data';

/**
 * Post picker from wanted post type.
 *
 * @param {Object} props Props for component.
 */
function PostSelect(props) {
    const {
        attributes: { postId },
        postTypeName,
        queryArgs = { per_page: 99 },
        queryOptions = { enabled: true },
        setAttributes,
    } = props;
    const options = [];

    // See: https://make.wordpress.org/core/2022/10/11/simplified-data-access-with-new-react-hooks-in-wordpress-6-1/
    // See: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/#useentityrecords
    // See: https://github.com/WordPress/gutenberg/tree/1f47e41d4ce5987f9acf07fab58a7c39ea919c05/packages/core-data/src/hooks
    const { records, isResolving } = useEntityRecords(
        'postType',
        postTypeName,
        queryArgs,
        queryOptions
    );

    options.push({
        value: 0,
        label: __('No post selected', 'meom-block-components'),
    });

    if (!isResolving && records && records.length > 0) {
        records.forEach((post) => {
            options.push({
                value: post.id,
                label: post.title.raw,
            });
        });
    }

    return (
        <>
            {isResolving && <Spinner />}

            {!isResolving && (
                <>
                    <SelectControl
                        label={__('Choose post', 'meom-block-components')}
                        options={options}
                        onChange={(newPostId) => {
                            setAttributes({ postId: newPostId });
                        }}
                        value={postId}
                    />
                </>
            )}
        </>
    );
}

export default PostSelect;
