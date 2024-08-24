document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector(".burger");
    var menu = document.querySelector(".nav-menu");
    

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

    burger.addEventListener("click", toggleBurgerMenu);
    window.addEventListener("resize", handleWindowResize);

});