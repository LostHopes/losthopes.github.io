document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector(".burger");
    burger.addEventListener("click", function () {
        burger.classList.toggle("burger-state");
        let menu = document.querySelector(".nav-menu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });
});
