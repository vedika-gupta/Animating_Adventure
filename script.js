let dubaiText = document.getElementById('dubaitext');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    dubaiText.style.left = value * -1 + 'px';
});