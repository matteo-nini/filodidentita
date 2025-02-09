<?php
function filo_enqueue_scripts() {
    // Aggiungiamo il foglio di stile principale
    wp_enqueue_style('filo-style', get_stylesheet_uri());

    // Aggiungiamo Tailwind (se usiamo il CDN)
    wp_enqueue_style('tailwind', 'https://cdn.jsdelivr.net/npm/tailwindcss@3.3.5/dist/tailwind.min.css');

    // Aggiungiamo Swiper.js per il carosello
    wp_enqueue_style('swiper', 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css');
    wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js', array(), null, true);

    // Aggiungiamo GSAP per le animazioni
    wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', array(), null, true);

    // Aggiungiamo il nostro file JS custom
    wp_enqueue_script('filo-main', get_template_directory_uri() . '/assets/js/main.js', array('gsap', 'swiper'), null, true);
}
add_action('wp_enqueue_scripts', 'filo_enqueue_scripts');

// Abilitiamo il supporto per i menu
function filo_register_menus() {
    register_nav_menus(array(
        'main-menu' => __('Menu Principale', 'filodidentita')
    ));
}
add_action('after_setup_theme', 'filo_register_menus');
?>
