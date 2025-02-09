<?php
/**
 * Template Name: Home
 */
get_header();
?>

<main id="hero" class="relative h-screen w-full">
    <div id="carousel" class="absolute inset-0">
        <!-- Elementor può gestire lo slider -->
    </div>
    <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/50">
        <h1 class="text-6xl font-bold">Filo d’identità</h1>
        <p class="text-2xl mt-2">Incontri | Storie | Corpi</p>
        <a href="#about" class="mt-6 bg-white text-black px-6 py-2 rounded-full text-lg font-medium">Segui il filo</a>
    </div>
</main>

<section id="about" class="h-screen flex items-center justify-center bg-gray-200">
    <div class="text-center">
        <h2 class="text-4xl font-bold">Chi Siamo</h2>
        <p class="mt-4">Scopri la nostra storia e missione.</p>
    </div>
</section>

<section id="editions" class="h-screen flex items-center justify-center bg-gray-300">
    <div class="text-center">
        <h2 class="text-4xl font-bold">Edizioni passate</h2>
        <p class="mt-4">Esplora i progetti e gli eventi passati.</p>
    </div>
</section>

<section id="contact" class="h-screen flex items-center justify-center bg-gray-400">
    <div class="text-center">
        <h2 class="text-4xl font-bold">Contatti</h2>
        <p class="mt-4">Mettiti in contatto con noi.</p>
    </div>
</section>

<?php get_footer(); ?>
