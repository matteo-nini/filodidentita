<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class("bg-gray-100 text-gray-900"); ?>>

<!-- Loader -->
<div id="loader" class="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div id="lottie-container" class="w-32 h-32"></div>
</div>

<!-- Navbar (compare dopo scroll) -->
<header id="site-header" class="fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 hidden">
    <div class="container mx-auto flex justify-between items-center p-4">
        <a href="<?php echo home_url(); ?>" class="text-xl font-bold">Filo d’Identità</a>
        <nav>
            <?php wp_nav_menu(['theme_location' => 'main-menu', 'menu_class' => 'flex space-x-4']); ?>
        </nav>
    </div>
</header>
