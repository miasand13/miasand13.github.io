const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".nav__link").forEach( n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
}));


window.addEventListener("scroll", reveal); 

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        
        } else {
            reveals[i].classList.remove("active");

        }
    }
}  

ScrollReveal({ 
    distance: "50px",
    duration: 1500,
});

ScrollReveal().reveal(".memoji__1", { delay: 600, origin:"bottom" });
ScrollReveal().reveal(".memoji__3", { delay: 800, origin:"bottom" });
ScrollReveal().reveal(".memoji__2", { delay: 1000, origin:"bottom" });
ScrollReveal().reveal(".memoji__4", { delay: 1200, origin:"bottom" });
ScrollReveal().reveal(".testimonial__text", { delay: 300, origin:"bottom" });
ScrollReveal().reveal(".contact__text", { delay: 300, origin:"bottom" });
ScrollReveal().reveal(".fields__wrapper", { delay: 600, origin:"bottom" });





