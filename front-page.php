<?php get_header(); ?>

<section class="hero relative h-screen w-full">
    <!-- Carosello -->
    <div class="swiper mySwiper h-full">
        <div class="swiper-wrapper">
            <div class="swiper-slide bg-cover bg-center" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/img/slide1.jpg');"></div>
            <div class="swiper-slide bg-cover bg-center" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/img/slide2.jpg');"></div>
            <div class="swiper-slide bg-cover bg-center" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/img/slide3.jpg');"></div>
        </div>
    </div>

    <!-- Testo in sovraimpressione -->
    <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 class="text-5xl font-bold">Filo d'Identità</h1>
        <p class="text-xl mt-2">Incontri | Storie | Corpi</p>
        <a href="#chi-siamo" class="mt-6 px-6 py-3 bg-white text-black rounded-full shadow-lg text-lg">Segui il filo</a>
    </div>
</section>

<!-- Sezioni -->
<section id="chi-siamo" class="h-screen flex items-center justify-center bg-gray-100">
    <h2 class="text-4xl font-bold">Chi Siamo</h2>
</section>

<section id="edizioni-passate" class="h-screen flex items-center justify-center bg-gray-200">
    <h2 class="text-4xl font-bold">Edizioni Passate</h2>
</section>

<section id="contatti" class="h-screen flex items-center justify-center bg-gray-300">
    <h2 class="text-4xl font-bold">Contatti</h2>
</section>

<?php get_footer(); ?>