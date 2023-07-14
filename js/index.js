const ham = document.querySelector('.nav__hamb');
const navList =document.querySelector('.nav__list');
const navBars = document.querySelectorAll('.nav__hamb span');

ham.addEventListener('click', () => {
  setTimeout(() => {
    navList.classList.toggle('active');
  }, 80);
  navBars.forEach(child => {
    child.classList.toggle('animated');
  });
});
