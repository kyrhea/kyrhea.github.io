
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['An Artist', 'A Game Developer', 'A Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.querySelector("#popup-open-btn-cow").addEventListener("click", function(){
    document.querySelector(".popup-cow").classList.add("active");
});

document.querySelector(".popup-cow .popup-close-btn").addEventListener("click", function(){
    document.querySelector(".popup-cow").classList.remove("active");
});



document.querySelector("#popup-open-btn-kate").addEventListener("click", function(){
    document.querySelector(".popup-kate").classList.add("active");
});

document.querySelector(".popup-kate .popup-close-btn").addEventListener("click", function(){
    document.querySelector(".popup-kate").classList.remove("active");
});


document.querySelector("#popup-open-btn-game").addEventListener("click", function(){
    document.querySelector(".popup-game").classList.add("active");
});

document.querySelector(".popup-game .popup-close-btn").addEventListener("click", function(){
    document.querySelector(".popup-game").classList.remove("active");
});


document.querySelector("#popup-open-btn-room").addEventListener("click", function(){
    document.querySelector(".popup-room").classList.add("active");
});

document.querySelector(".popup-room .popup-close-btn").addEventListener("click", function(){
    document.querySelector(".popup-room").classList.remove("active");
});


document.querySelector("#popup-open-btn-ghoul").addEventListener("click", function(){
    document.querySelector(".popup-ghoul").classList.add("active");
});

document.querySelector(".popup-ghoul .popup-close-btn").addEventListener("click", function(){
    document.querySelector(".popup-ghoul").classList.remove("active");
});


document.querySelector("#popup-open-btn-vase").addEventListener("click", function(){
    document.querySelector(".popup-vase").classList.add("active");
});

document.querySelector(".popup-vase .popup-close-btn").addEventListener("click", function(){
    document.querySelector(".popup-vase").classList.remove("active");
});


document.querySelector("#popup-open-btn-sketch").addEventListener("click", function(){
    document.querySelector(".popup-sketch").classList.add("active");
});

document.querySelector(".popup-sketch .popup-close-btn").addEventListener("click", function(){
    document.querySelector(".popup-sketch").classList.remove("active");
});


document.querySelector("#popup-open-btn-perfume").addEventListener("click", function(){
    document.querySelector(".popup-perfume").classList.add("active");
});

document.querySelector(".popup-perfume .popup-close-btn").addEventListener("click", function(){
    document.querySelector(".popup-perfume").classList.remove("active");
});


document.querySelector("#popup-open-btn-squash").addEventListener("click", function(){
    document.querySelector(".popup-squash").classList.add("active");
});

document.querySelector(".popup-squash .popup-close-btn").addEventListener("click", function(){
    document.querySelector(".popup-squash").classList.remove("active");
});


document.querySelector("#popup-open-btn-daniel").addEventListener("click", function(){
    document.querySelector(".popup-daniel").classList.add("active");
});

document.querySelector(".popup-daniel .popup-close-btn").addEventListener("click", function(){
    document.querySelector(".popup-daniel").classList.remove("active");
});