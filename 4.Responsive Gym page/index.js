// this is responsive 
burger = document.querySelector('.burger');
// navbar = document.querySelector('.navbar');
right = document.querySelector('.right');
left = document.querySelector('.left');
mid = document.querySelector('.mid');
header = document.querySelector('.header');



// toggle is use to show hide element and hide showing elements 
burger.addEventListener('click', ()=>{
	left.classList.toggle('v-class');
	mid.classList.toggle('v-class');
	right.classList.toggle('v-class');
	header.classList.toggle('h-nav');

})