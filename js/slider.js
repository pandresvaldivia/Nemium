const bullets = document.querySelectorAll('[class^="sliderBullet"]');

for (const bullet of bullets) {
	bullet.addEventListener('click', function () {
		const bulletSelected = document.querySelector('.sliderBullet-selected');
		bulletSelected.className = 'sliderBullet';
		this.className = 'sliderBullet-selected';
	});
}
