let humburger = document.querySelector('.humburger');
let navLinks = document.querySelector('.nav-links');
let navBar = document.querySelector('.nav-bar');
const header = document.querySelector('.header');
humburger.addEventListener('click', ()=>{
  console.log("Clicked")
 navLinks.classList.toggle('active'); 
})
let transparent = ()=>{
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    navBar.style.cssText = "opacity: 0.8; padding: 0;";
  } else {
    navBar.style.cssText = "opacity: 1; padding: 10px;";

  }
}
// document.addEventListener('scroll', transparent);
window.onscroll = function() {transparent();}