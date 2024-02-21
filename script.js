const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnlogin = document.querySelector('.loginButton');
const closeIcon = document.querySelector('.icon-close');
const header = document.querySelector('header');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});


loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnlogin.addEventListener('click', ()=> {
   header.style.display = 'none'; 
    wrapper.classList.add('active-popup');
});

closeIcon.addEventListener('click', ()=> {
    header.style.display = 'flex';
    wrapper.classList.remove('active-popup');
    
});






