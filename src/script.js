const link = document.querySelector('.copy-email');
const toast = document.getElementById('toast');

link.addEventListener('click', (e) => {
    e.preventDefault();

    const email = link.dataset.email;

    navigator.clipboard.writeText(email).then(() => {
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 1800);
    });
});

// States: 0 = initial, 1 = shulmnn, 2 = readyyyk — any click cycles
const SWIPE_URLS = [
    null,
    'https://www.shulmnn.com/',
    'https://readyyyk.com/'
];

const swipeOverlay = document.getElementById('swipeOverlay');
const swipeFrame = document.getElementById('swipeFrame');
let swipeState = 0;

function goToState(state) {
    swipeState = (state + 3) % 3;

    if (swipeState === 0) {
        swipeOverlay.classList.remove('active');
        swipeFrame.src = 'about:blank';
    } else {
        swipeFrame.src = SWIPE_URLS[swipeState];
        swipeOverlay.classList.add('active');
    }
}

document.addEventListener('click', (e) => {
    if (e.target.closest('a') || e.target.closest('.copy-email')) return;
    goToState(swipeState + 1);
});
