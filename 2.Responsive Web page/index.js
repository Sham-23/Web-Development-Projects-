// this is responsive 
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');
navList = document.querySelector('.nav-list');

// toggle is use to show hide element and hide showing elements 
burger.addEventListener('click', ()=>{
	navList.classList.toggle('v-class');
	rightNav.classList.toggle('v-class');
	navbar.classList.toggle('h-nav');

})