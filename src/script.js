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
