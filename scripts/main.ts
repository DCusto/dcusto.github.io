import lottie from 'lottie-web';

const animator = document.querySelector('.dashboard-anim');
lottie.loadAnimation({
    container: animator,
    path: 'https://assets5.lottiefiles.com/packages/lf20_jdehkg9c.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
});
