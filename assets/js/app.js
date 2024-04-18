// nav 
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav ul li a')

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav ul li a[href*=' + id + ']').classList.add(active)
			})
		}
	})
}

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}

// scroll reveal 
const sr = ScrollReveal({
	distance: '30px',
	duration: 1200,
	reset: true,
});

sr.reveal(`.top`, {
	origin: 'top',
	interval: 100,
})

sr.reveal(`.bottom`, {
	origin: 'bottom',
	interval: 100,
})

sr.reveal(`.left`, {
	origin: 'left',
	interval: 100,
})

sr.reveal(`.right`, {
	origin: 'right',
	interval: 100,
})