<?php

function gutenberg_blocks_generate_sheet_style_file($callback, $css_file, $theme_support)
{
  $css_folder = 'css';
  $assets_folder = wp_upload_dir()['basedir'] . '/uploads-assets';
  $css_folder_path = $assets_folder . '/' . $css_folder;

  if (!file_exists($assets_folder)) mkdir($assets_folder);

  if (!file_exists($css_folder_path)) mkdir($css_folder_path);

  $support = get_theme_support($theme_support);

  if (!is_array($support) || count($support) === 0) return;

  $css_file_path = $css_folder_path . '/' . $css_file;

  // Use array_reduce to apply the callback to each value in $support
  $css = array_reduce($support[0], $callback, '');

  file_put_contents($css_file_path, $css);
}
