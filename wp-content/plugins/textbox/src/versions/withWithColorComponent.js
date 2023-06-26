/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	withColors
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';

import '../editor.scss';

function Edit({ attributes, setAttributes, ...props }) {
	const { text, alignment, } = attributes;
	const { backgroundColor, textColor, setTextColor, setBackgroundColor } = props

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color', 'gutenberg')}
					disableCustomColors={false}
					colorSettings={[
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __('Background', 'gutenberg'),
						},
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __('Text', 'gutenberg'),
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
					style: { backgroundColor: backgroundColor.color, color: textColor.color }

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

export default withColors({
	backgroundColor: "backgroundColor",
	textColor: "color"
})(Edit)
