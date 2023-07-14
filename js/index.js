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

const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

const paragraph = document.getElementById('warnings');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let warnings = '';
  let getIn = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  paragraph.innerHTML = '';
  if (name.value.length < 6) {
    warnings += `the name field must be at leats 6 characters long <br>`;
    getIn = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `the email field is not valid <br>`;
    getIn = true;
  }
  if (subject.value.length < 8) {
    warnings += `the subject field is too short <br>`;
    getIn = true;
  }
  if (message.value.length < 8) {
    warnings += `please fill the message filed <br>`;
    getIn = true;
  }
  if (warnings) {
    paragraph.innerHTML = warnings;
  } else {
    paragraph.innerHTML = 'email sent!'
  }
});
