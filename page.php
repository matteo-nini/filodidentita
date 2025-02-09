<?php get_header(); ?>

<main class="container mx-auto py-8">
    <!-- Inizio Pagina -->
    <div class="page-container">
        <?php
        if (have_posts()) :
            while (have_posts()) :
                the_post();
        ?>
                <article class="page">
                    <!-- Titolo della pagina -->
                    <h1 class="text-4xl font-bold mb-4"><?php the_title(); ?></h1>
                    
                    <!-- Contenuto della pagina -->
                    <div class="page-content">
                        <?php the_content(); ?>
                    </div>
                </article>
        <?php
            endwhile;
        else :
            echo '<p>Nessun contenuto trovato</p>';
        endif;
        ?>
    </div>
</main>

<?php get_footer(); ?>
