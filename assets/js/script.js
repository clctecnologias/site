document.addEventListener("DOMContentLoaded", () => {
    // PRELOADER
    const preloader = document.getElementById("preloader");
    const preloaderText = document.getElementById("conteudoPreloader");
    const hero = document.querySelector(".hero");
    const menu = document.querySelector(".menu");

    window.addEventListener("load", hidePreloader);

    function hidePreloader() {
        let clipPath = 100;
        const interval = setInterval(() => {
            clipPath -= 2;
            preloader.style.clipPath = `polygon(0 0, 100% 0, 100% ${clipPath}%, 0% ${clipPath}%)`;

            if (clipPath <= 0) {
                clearInterval(interval);
                preloader.style.display = "none";
                hero.classList.add("loaded");
                menu.classList.add("loaded");
            }
        }, 45);
    }

    // MENU HAMBURGUER
    const menuHamburguer = document.querySelector(".menuHamburguer");
    menuHamburguer.addEventListener("click", () => {
        const menu = document.querySelector(".menu");
        menu.classList.toggle("activo");
    });

    

});
