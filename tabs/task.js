const tabs = Array.from(document.getElementsByClassName('tab'));
const tabsContent = Array.from(document.getElementsByClassName('tab__content'));


tabs.forEach((elem, index) => {
	elem.addEventListener('click', () => {
		let tabsActive = document.querySelectorAll('.tab_active');
		let tabsContentActive = document.querySelectorAll('.tab__content_active');
		
		tabsActive[0].classList.remove('tab_active');
		tabsContentActive[0].classList.remove('tab__content_active');

		elem.classList.add('tab_active');
		tabsContent[index].classList.add('tab__content_active');
	})	
})
