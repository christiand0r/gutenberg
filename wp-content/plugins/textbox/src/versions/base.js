/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';

import '../editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					initialOpen
					title={__('Color', 'gutenberg')}
					colorSettings={[
						{
							value: '',
							onChange: (value) => console.log(value),
							label: __('Background', 'gutenberg'),
						},
					]}
				/>
				<PanelBody
					title={__('Attributes', 'gutenberg')}
					initialOpen={true}
				>
					<TextControl
						value={text}
						label={__('Text', 'gutenberg')}
						onChange={(value) =>
							setAttributes({ text: value })
						}
						help='Change the text saved in the "text" attribute'
					/>

					<TextareaControl
						value={text}
						label={__('Text', 'gutenberg')}
						onChange={(value) =>
							setAttributes({ text: value })
						}
						help='Change the text saved in the "text" attribute, but using text-area'
					/>

					<ToggleControl
						checked={true}
						label={__('Some Toggle Label', 'gutenberg')}
						onChange={(value) => console.log(value)}
						help="Toggle and hope nothing breaks"
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={(value) =>
						setAttributes({ alignment: value })
					}
				/>
			</BlockControls>
			<RichText
				{...useBlockProps({
					className: `has-text-align-${alignment}`,
				})}
				tagName="h4"
				value={text}
				allowedFormats={[]}
				placeholder={__('Write a text…', 'gutenberg')}
				onChange={(value) => setAttributes({ text: value })}
			/>
		</>
	);
}
