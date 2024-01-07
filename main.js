const body = document.querySelector('body');
const icon = document.querySelector('.fa-solid');
const btn = document.querySelector('.btn-mode');
const circle = document.querySelector('.circle');
const paragraph = document.querySelector('.paragraph')
console.log(icon)

btn.addEventListener('click', function() {
    if (getComputedStyle(circle).left === '0px') {
        circle.style.left = '82px';
        body.classList.toggle('active-to-black');
        btn.classList.toggle('active-to-white'); 
        circle.classList.toggle('active-to-black');  
        paragraph.classList.toggle('active-letter-to-white'); 
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('active-letter-to-white'); 

    } else {
        circle.style.left = '0px';
        body.classList.toggle('active-to-black');
        btn.classList.toggle('active-to-white'); 
        circle.classList.toggle('active-to-black');  
        paragraph.classList.toggle('active-letter-to-white'); 
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('active-letter-to-white'); 
    }
})