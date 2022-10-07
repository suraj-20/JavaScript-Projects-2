const open = document.getElementById('open');
const close = document.getElementById('close');
const contianer = document.getElementById('contianer');

open.addEventListener('click', () => {
    contianer.classList.add('active');
});

close.addEventListener('click', () => {
    contianer.classList.remove('active');
});