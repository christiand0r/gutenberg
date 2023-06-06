<?php

/**
 * Plugin Name:       Text Box
 * Description:       Block for using like a text box
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Christian
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenberg
 *
 * @package           gutenberg
 */

function create_block_textbox_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_textbox_block_init');
