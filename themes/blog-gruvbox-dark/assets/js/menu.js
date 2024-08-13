document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector(".burger");
    var menu = document.querySelector(".nav-menu");
    var scroll = document.querySelector(".scroll-btn");

    function toggleBurgerMenu() {
        burger.classList.toggle("burger-state");
        menu.classList.toggle("nav-menu");
    }

    function handleWindowResize() {
        if (window.innerWidth > 768) {
            menu.classList.remove("hidden-menu");
            menu.classList.add("nav-menu");
            burger.classList.remove("burger-state");
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    burger.addEventListener("click", toggleBurgerMenu);
    window.addEventListener("resize", handleWindowResize);
    scroll.addEventListener("click", scrollToTop);
});