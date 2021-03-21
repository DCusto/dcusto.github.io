import lottie from 'lottie-web';

const animator = document.querySelector('.dashboard-anim');
lottie.loadAnimation({
    container: animator,
    path: 'https://assets5.lottiefiles.com/packages/lf20_jdehkg9c.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
});

// Get the navbar
var navbar = document.getElementById("navbar");
var nav_placeholder = document.querySelector('.nav-placeholder');

// When the user scrolls the page, execute myFunction
window.onscroll = () => {
    if (window.pageYOffset > 0) {
      navbar.classList.add("sticky")
      nav_placeholder.classList.add('visible');
      nav_placeholder.classList.remove('hidden');
    } else {
      navbar.classList.remove("sticky");
      nav_placeholder.classList.add('hidden');
      nav_placeholder.classList.remove('visible');
    }
}
