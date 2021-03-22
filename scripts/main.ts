import lottie from 'lottie-web';
import anime from 'animejs';

const animator = document.querySelector('.dashboard-anim');
lottie.loadAnimation({
    container: animator,
    path: 'https://assets5.lottiefiles.com/packages/lf20_jdehkg9c.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
});

var hasAnimated = false;
function isInViewport(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0
    );
}

function animateNumberSection() {

    var numbers = {
        'subs': '0',
        'trades': '0',
        "lives": '0'
    }

    var subscribers = document.getElementById('subs');
    var trades = document.getElementById('trades');
    var lives = document.getElementById('lives');

    anime({
        targets: numbers,
        subs: '13,257',
        trades: '435,765',
        lives: '15,357,298',
        round: 1,
        easing: 'linear',
        update: function () {
            subscribers.innerHTML = numbers.subs.toString();
            trades.innerHTML = numbers.trades.toString();
            lives.innerHTML = numbers.lives.toString();
        }
    });
}

var animeTrigger = document.querySelector('.stats-grid-container') as HTMLElement;
document.addEventListener('scroll', (e) => {
    if (isInViewport(animeTrigger)) {
        if (!hasAnimated) {
            hasAnimated = true;
            animateNumberSection();
        }
    }
});