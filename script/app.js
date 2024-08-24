const mobileNavlink = document.querySelector('.mobileNavlink');
const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.getElementById('hamburgerIcon');

hamburger.addEventListener('click', function() {
    mobileNavlink.classList.toggle('active');
    hamburgerIcon.classList.toggle('fa-x')
})