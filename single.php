<?php get_header(); ?>

<main class="container mx-auto py-8">
    <!-- Inizio Post -->
    <div class="post-container">
        <?php
        if (have_posts()) :
            while (have_posts()) :
                the_post(); // Avanza al prossimo post
        ?>
                <article class="post">
                    <!-- Titolo del post -->
                    <h1 class="text-4xl font-bold mb-4"><?php the_title(); ?></h1>
                    
                    <!-- Data di pubblicazione -->
                    <p class="text-sm text-gray-500 mb-6">
                        Pubblicato il: <?php the_date(); ?> | 
                        da <?php the_author(); ?>
                    </p>
                    
                    <!-- Contenuto del post -->
                    <div class="post-content">
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