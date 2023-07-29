// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 2)
})



//show/hide faq answer

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
   

//change icon when faq is toggled
const icon = faq.querySelector('.faq__icon i');
if(icon.className === 'uil uil-plus') {
    icon.className = "uil uil-minus"
} else {
    icon.className = "uil uil-plus"
}

})
})


//show /hide nav menu
const menu =document.querySelector(".nav__menu");
const menuBtn =document.querySelector("#open-menu-btn");
const closeBtn =document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})



/////close nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);
 



const arrUP = document.querySelector('.uil-arrow-circle-up');

let winds = Window.scrollY;

if (winds >= 550 ){
    arrUP.style.display = 'block';
}else{
    arrUP.style.display = 'none';
}