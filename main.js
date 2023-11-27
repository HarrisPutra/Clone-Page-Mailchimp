const dropdown = document.querySelector('.dropdown input');
const nav = document.querySelector('.nav-side');

dropdown.addEventListener('click', function() {
    nav.classList.toggle('slide');
}) 