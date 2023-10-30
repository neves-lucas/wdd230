let lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
	localStorage.setItem('lastVisit', new Date());
	document.querySelector('.visits').innerHTML = 'Welcome! Let us know if you have any questions.';
}

else {
	lastVisit = new Date(lastVisit);
	const daysSinceLastVisit = Math.round((new Date() - lastVisit) / (1000 * 60 * 60 * 24));

	if (daysSinceLastVisit === 0) {
		document.querySelector('.visits').innerHTML = 'Back so soon! Awesome!';
	}

	else if (daysSinceLastVisit === 1) {
		document.querySelector('.visits').innerHTML = `You last visited ${daysSinceLastVisit} day ago.`;
	}

	else {
		document.querySelector('.visits').innerHTML = `You last visited ${daysSinceLastVisit} days ago.`;
	}

	localStorage.setItem('lastVisit', new Date());
}