const humburger = document.querySelector('.humburger');
const navBar = document.querySelector('.nav-links');
humburger.addEventListener('click', ()=>{
  console.log("Clicked")
  navBar.classList.toggle('active'); 
})