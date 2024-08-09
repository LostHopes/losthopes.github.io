document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector(".burger");
    var menu = document.querySelector(".nav-menu");

    burger.addEventListener("click", function () {
        burger.classList.toggle("burger-state");

        menu.classList.toggle("nav-menu");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            menu.classList.remove("hidden-menu");
            menu.classList.add("nav-menu");
            burger.classList.remove("burger-state");
        }
    });
});