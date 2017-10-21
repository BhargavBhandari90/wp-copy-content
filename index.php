<?php
/*
Plugin Name:  WordPress Copy Content
Plugin URI:   https://developer.wordpress.org/plugins/the-basics/
Description:  Copy content from existing post
Version:      1.0.0
Author:       Bunty
Author URI:   https://bhargavb.com/
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  wcc
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
	define( 'WPCC_VERSION', '1.0.0' );
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

// function wp_copy_content_autoloader( $class ) {
// 	echo $class;
// 	if ( file_exists( WPCC_PATH . 'admin/' . $class . '.php' ) ) {
// 		include WPCC_PATH . 'app/admin/' . $class . '.php';
// 	}
// }

// spl_autoload_register( 'wp_copy_content_autoloader' );

if ( is_admin() ) {
	require WPCC_PATH . 'app/admin/WPCopyContentAdmin.php';

	new WPCopyContentAdmin();
}
