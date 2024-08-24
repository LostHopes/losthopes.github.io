document.addEventListener("DOMContentLoaded", function() {
    var scroll = document.querySelector(".scroll-btn");

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    } 
    
    if(!scroll) { return; }

    scroll.addEventListener("click", scrollToTop);
});