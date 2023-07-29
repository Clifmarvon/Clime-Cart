// change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 2);
});

//show/hide faq answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //change icon when faq is toggled
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

//show /hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

/////close nav menu

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

let winds = 0;

window.addEventListener('scroll', () => {
    winds = window.scrollY;

    if (winds >= 520) {
      
        arrUP.style.display = 'block';
    } else {
        arrUP.style.display = 'none';
    }
});

arrUP.addEventListener('click', () => {
    // Scroll the page to the top (0 vertical scroll position) when 'arrUP' is clicked.
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
