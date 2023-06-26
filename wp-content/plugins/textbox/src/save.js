import { useBlockProps, RichText } from '@wordpress/block-editor';

import classnames from 'classnames';

export default function save( { attributes } ) {
	const { text, alignment, shadow, shadowOpacity } = attributes;

	const classes = classnames( `has-text-align-${ alignment }`, {
		'has-shadow': shadow,
	} );

	return (
		<RichText.Content
			{ ...useBlockProps.save( {
				className: classes,
				style: { '--shadow-opacity': `${ shadowOpacity }` },
			} ) }
			tagName="h4"
			value={ text }
		/>
	);
}
