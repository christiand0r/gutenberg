/* eslint-disable @wordpress/no-unsafe-wp-apis */
/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	RangeControl,
} from '@wordpress/components';
import classnames from 'classnames';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { text, alignment, shadow, shadowOpacity } = attributes;

	const classes = classnames( `has-text-align-${ alignment }`, {
		'has-shadow': shadow,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody
					initialOpen={ false }
					title={ __( 'Attributes', 'gutenberg' ) }
				>
					<TextControl
						value={ text }
						label={ __( 'Text', 'gutenberg' ) }
						onChange={ ( value ) =>
							setAttributes( { text: value } )
						}
						help='Change the text saved in the "text" attribute'
					/>

					<TextareaControl
						value={ text }
						label={ __( 'Text', 'gutenberg' ) }
						onChange={ ( value ) =>
							setAttributes( { text: value } )
						}
						help='Change the text saved in the "text" attribute, but using text-area'
					/>

					<ToggleControl
						checked={ true }
						label={ __( 'Some Toggle Label', 'gutenberg' ) }
						onChange={ ( value ) => console.log( value ) }
						help="Toggle and hope nothing breaks"
					/>
				</PanelBody>

				{ shadow && (
					<PanelBody
						initialOpen={ false }
						title={ __( 'Shadow Settings', 'gutenberg' ) }
					>
						<RangeControl
							step={ 1 }
							min={ 1 }
							max={ 10 }
							value={ shadowOpacity }
							onChange={ ( value ) =>
								setAttributes( { shadowOpacity: value } )
							}
							label={ __( 'Shadow Opacity', 'gutenberg' ) }
						/>
					</PanelBody>
				) }
			</InspectorControls>
			<BlockControls
				controls={ [
					{
						icon: 'admin-page',
						title: __( 'Shadow', 'gutenberg' ),
						isActive: shadow,
						onClick: () => setAttributes( { shadow: ! shadow } ),
					},
				] }
			>
				<AlignmentToolbar
					value={ alignment }
					onChange={ ( value ) =>
						setAttributes( { alignment: value } )
					}
				/>
			</BlockControls>
			<RichText
				{ ...useBlockProps( {
					className: classes,
					style: { '--shadow-opacity': shadowOpacity },
				} ) }
				tagName="h4"
				value={ text }
				allowedFormats={ [] }
				placeholder={ __( 'Write a text…', 'gutenberg' ) }
				onChange={ ( value ) => setAttributes( { text: value } ) }
			/>
		</>
	);
}
