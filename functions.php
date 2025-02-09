<?php
function filodidentita_enqueue_scripts() {
    // Carica il CSS compilato di Tailwind
    wp_enqueue_style( 'filodidentita-styles', get_template_directory_uri() . '/dist/styles.css' );
    
    // Carica il file JavaScript per il Lottie Loader e altre funzionalità
    wp_enqueue_script( 'lottie', 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.7.13/lottie.min.js', array(), null, true );
    wp_enqueue_script( 'filodidentita-scripts', get_template_directory_uri() . '/assets/js/main.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'filodidentita_enqueue_scripts' );
?>
