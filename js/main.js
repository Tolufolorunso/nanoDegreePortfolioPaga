 'strict mode'
const aboutMe = document.querySelector('.about-me');
const close = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');

aboutMe.addEventListener('click', function (){
  modal.style.display = 'flex';
});

close.addEventListener('click', function (){
  // alert('connected');
  modal.style.display = 'none';
});
