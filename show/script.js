// const p = document.querySelectorAll('p');

// for( let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = 'red';
// }

const modal = document.querySelectorAll('.modal');
const content = document.querySelectorAll('.content');
const plus = document.querySelectorAll('.plus');
const dash = document.querySelectorAll('.dash');

for( let i = 0; i < modal.length; i++ ) {
    modal[i].addEventListener("click", function(){
        content[i].classList.toggle('show');
        dash[i].classList.toggle('show');
        plus[i].classList.toggle('hidden');
    });
}

const contentModal = document.querySelectorAll('.content-modal');
const group = document.querySelectorAll('.group');
const add = document.querySelectorAll('.add');
const minus = document.querySelectorAll('.minus');

for( let i = 0; i < contentModal.length; i++ ) {
    contentModal[i].addEventListener("click", function(){
        group[i].classList.toggle('show');
        minus[i].classList.toggle('show');
        add[i].classList.toggle('hidden');
    });
}

const accordion = document.getElementById('accordion');
const closeBtn = document.getElementById('closeBtn');
const openBtn = document.getElementById('openBtn');

closeBtn.addEventListener("click", function(){
    accordion.classList.toggle('show');
});

openBtn.addEventListener("click", function(){
    accordion.classList.toggle('show');
});



// document.querySelectorAll()
// const p = document.querySelectorAll('p');
// ubah 1 aja
// p[3].innerHTML = 'Ini diubah melalui javascript';

// ubah semua
// for( let i = 0; i < p.length; i++ ) {
//     p[i].innerHTML = 'Ini diubah melalui javascript';
// }