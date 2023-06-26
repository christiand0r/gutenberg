import { registerBlockType, createBlock } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: Edit,
	save,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( { content, align } ) => {
					return createBlock( metadata.name, {
						text: content,
						alignment: align,
					} );
				},
			},
			{
				type: 'enter',
				regExp: /textbox/i,
				transform: ( { content, align } ) => {
					return createBlock( metadata.name, {
						text: content,
						alignment: align,
					} );
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				isMatch: ( { text } ) => Boolean( text ),
				transform: ( { text, alignment } ) => {
					return createBlock( 'core/paragraph', {
						content: text,
						align: alignment,
					} );
				},
			},
		],
	},
} );
