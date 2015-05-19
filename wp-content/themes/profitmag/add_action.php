<?php
/**
 * @package BLACK
 * @subpackage Action
 * 
 * Actions for the System
 */
add_action('wp',function(){
    
    
});

add_action('init',function(){
    register_nav_menus( array(
        'header-menu'       => __( 'Header menu' ),             
    ));
});

add_action('admin_init',function(){
    
    
});

add_action( 'wp_enqueue_scripts', function() {
    
});

// Home page slider
function flex_slider_function() {
?>
<?php
}
add_action( 'flex_slider', 'flex_slider_function' );