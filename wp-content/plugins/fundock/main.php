<?php

/**
 * Plugin Name:       Fundamental Block
 * Description:       Introduction to building blocks with Gutenberg + React and configuring Wordpress to get the full power of Gutenberg
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Christian
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fundock
 *
 * @package           fundock
 */

function create_block_fundock_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_fundock_init');
