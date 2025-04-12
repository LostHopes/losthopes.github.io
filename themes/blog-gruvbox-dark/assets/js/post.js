document.addEventListener("DOMContentLoaded", function() {
    var scroll = document.querySelector(".scroll-btn");
    

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    } 
    
    if(!scroll) { return; }

    function toggleScrollButton () {        
        let scrollY = window.scrollY;
        if (scrollY < 800){
            scroll.classList.add("scroll-btn-hide");
        } else {
            scroll.classList.remove("scroll-btn-hide");
        }
    }

    scroll.addEventListener("click", scrollToTop);
    document.addEventListener("scroll", toggleScrollButton);
});