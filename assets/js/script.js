document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("lottie-container");

    let animation = lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: theme_url + "/assets/lottie/loader.json"
    });

    // Nasconde il loader dopo il caricamento
    window.addEventListener("load", function () {
        gsap.to("#loader", {
            opacity: 0,
            duration: 1,
            delay: 2,
            onComplete: () => document.getElementById("loader").remove()
        });
    });

    // Mostra la navbar dopo scroll
    window.addEventListener("scroll", function () {
        let header = document.getElementById("site-header");
        if (window.scrollY > 500) {
            header.classList.remove("hidden");
        } else {
            header.classList.add("hidden");
        }
    });
});
