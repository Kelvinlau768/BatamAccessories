console.log(window.innerWidth);

tapBtn = document.getElementById('tapBtn');
closeBtn = document.getElementById('closeBtn');
showBtn = document.getElementById('showBtn');

closeBtn.addEventListener('click', function() {
    tapBtn.classList.toggle('show');
});

showBtn.addEventListener('click', function() {
    tapBtn.classList.toggle('show');
});