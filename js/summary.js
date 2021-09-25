const sections = document.querySelectorAll('.section-number .section-content');

const myObserver = new IntersectionObserver((entries, observer) => {
	const section = entries[0].target;
	const link = document.querySelector(`a[href="#${section.id}"]`);

	if (entries[0].isIntersecting) {
		link.className = 'summaryLink-selected';
	} else {
		link.className = '';
	}
});

for (const section of sections) {
	myObserver.observe(section);
}
