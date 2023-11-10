'use strict'

const openBtn = document.querySelector('.btnOpen');
const menu = document.querySelector('.menu');
const pages = document.getElementsByClassName('pages')
const accordion = document.getElementsByClassName('accordion1')

openBtn.addEventListener('click', function(e) {
    menu.classList.add('active');
    e.stopPropagation();
})

document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !openBtn.contains(e.target)) {
      menu.classList.remove('active');
    }
});

window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add('active');
  } else {
      header.classList.remove('active');
  }
});

for (let i = 0; i < pages.length; i++) {
  pages[i].addEventListener('click', function(){
    accordion.classList.toggle('active')
  })
  
}