<?php
/**
 * Plugin Name:  Copy Block Content
 * Description:  Copy content from existing post to your block editor.
 * Version:      2.0.1
 * Author:       Bunty
 * Author URI:   https://bhargavb.com/
 * License:      GPL2
 * License URI:  https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:  wcc
 *
 * @package CopyContent.
 */

/**
 * Main file, contains the plugin metadata and activation processes
 *
 * @package    WPCopyContent
 * @subpackage Main
 */
if ( ! defined( 'WPCC_VERSION' ) ) {
	/**
	 * The version of the plugin.
	 */
	define( 'WPCC_VERSION', '2.0.1' );
}

if ( ! defined( 'WPCC_PATH' ) ) {
	/**
	 *  The server file system path to the plugin directory.
	 */
	define( 'WPCC_PATH', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'WPCC_URL' ) ) {
	/**
	 * The url to the plugin directory.
	 */
	define( 'WPCC_URL', plugin_dir_url( __FILE__ ) );
}

if ( ! defined( 'WPCC_BASE_NAME' ) ) {
	/**
	 * The url to the plugin directory.
	 */
	define( 'WPCC_BASE_NAME', plugin_basename( __FILE__ ) );
}

// Include file.
if ( is_admin() ) {

	// Include admin functions file.
	require WPCC_PATH . 'app/admin/class-copy-block-content-admin.php';

	// Object for admin class.
	new Copy_Block_Content_Admin();
}
