function showBurger(item) {
    let wHeight = window.innerHeight;
    let wWidth = window.innerWidth;
    let navBar = document.getElementsByClassName("nav-menu");
    let element = document.createElement("div");

    for (let item = 0; item < 3; item++) {
        element.className = `line${item}`;
        navBar.appendChild(element);
    }

    item.classList.toggle("burger");
}

function animateBurger(item) {

}