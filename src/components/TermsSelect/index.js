/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { FormTokenField, Spinner } from '@wordpress/components';
import { useEntityRecords } from '@wordpress/core-data';

/**
 * Multi-select term picker for a taxonomy using FormTokenField.
 *
 * Stores selected term IDs in `attributes.termIds`. Display tokens are term
 * names; the component converts between names and IDs via the resolved list.
 *
 * @param {Object}   props                Props for component.
 * @param {Object}   props.attributes     Block attributes (expects `termIds` array).
 * @param {string}   props.taxonomyName   Taxonomy slug to query terms from.
 * @param {Object}   [props.queryArgs]    Args passed to useEntityRecords.
 * @param {Object}   [props.queryOptions] Options passed to useEntityRecords.
 * @param {Function} props.setAttributes  Block setAttributes.
 * @return {JSX.Element|null} TermsSelect markup, or null when no records.
 */
function TermsSelect( props ) {
    const {
        attributes: { termIds = [] },
        taxonomyName,
        queryArgs = {
            per_page: 99,
            orderby: 'name',
            order: 'asc',
            _fields: 'id,name',
        },
        queryOptions = { enabled: true },
        setAttributes,
    } = props;

    // See: https://make.wordpress.org/core/2022/10/11/simplified-data-access-with-new-react-hooks-in-wordpress-6-1/
    // See: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/#useentityrecords
    const { records, isResolving } = useEntityRecords(
        'taxonomy',
        taxonomyName,
        queryArgs,
        queryOptions
    );

    if ( isResolving ) {
        return <Spinner />;
    }

    if ( ! records || records.length === 0 ) {
        return null;
    }

    const idToName = new Map( records.map( ( t ) => [ t.id, t.name ] ) );
    const nameToId = new Map( records.map( ( t ) => [ t.name, t.id ] ) );
    const allNames = records.map( ( t ) => t.name );

    const selectedNames = termIds
        .map( ( id ) => idToName.get( id ) )
        .filter( Boolean );

    return (
        <FormTokenField
            label={ __( 'Choose categories', 'meom-block-components' ) }
            value={ selectedNames }
            suggestions={ allNames }
            onChange={ ( newNames ) => {
                const newIds = newNames
                    .map( ( name ) => nameToId.get( name ) )
                    .filter( ( id ) => typeof id === 'number' );
                setAttributes( { termIds: newIds } );
            } }
            __experimentalExpandOnFocus
            __experimentalShowHowTo={ false }
            help={ __(
                'You can select one or more terms. Selecting multiple terms will expand the lifts (OR logic).',
                'block-components'
            ) }
        />
    );
}

export default TermsSelect;
