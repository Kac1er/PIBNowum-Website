const strengthsContainer = document.querySelector(".strengths");
const offerContainer = document.querySelector(".offer__carousel");
const projectsContainer = document.querySelector(".projects__container");
const projectsList = document.querySelectorAll(".projects__item");
const projectsFilters = document.querySelectorAll('.projects__filters-item');

const initCarousel = (carouselId, breakpoint) => {
	if(breakpoint == 0) {
		const carousel = new Flickity(carouselId, {
			cellAlign: "center",
			contain: true,
			prevNextButtons: false,
			autoPlay: true,
			pauseAutoPlayOnHover: false,
			wrapAround: true,
		});
	}
	else if (window.innerWidth < breakpoint) {
		const carousel = new Flickity(carouselId, {
			cellAlign: "center",
			contain: true,
			prevNextButtons: false,
			autoPlay: true,
			pauseAutoPlayOnHover: false,
			wrapAround: true,
		});
	}
};
/* Function sets single category and display projects only from that category */
const switchProjectsCategory = (e) => {
	const category = e.target.dataset.category;
	if (projectsContainer.dataset.category != category) {
		const carousel = Flickity.data(projectsContainer);
		let elementsToInstert = [];

		projectsList.forEach(project => {
			if (project.dataset.category.includes(category)) {
				elementsToInstert.push(project);
			}
		});

		carousel.remove(carousel.getCellElements());
		carousel.append(elementsToInstert);
		projectsContainer.dataset.category = category;
		/* Changes active button to other one. */
		swapEnabledFilter(e);
	}
};

/* Current active filter "button" will be disabled and new "button" will be enabled */
const swapEnabledFilter = (e) => {
	const enabledFilter = document.querySelector('.projects__filters-item--selected');
	enabledFilter.classList.remove('projects__filters-item--selected');
	e.target.classList.add('projects__filters-item--selected');
}

/* Setting click event listener for active buttons. Setting switchProjectsCategory function on click. */
const setProjectsFilters = () => {
	projectsFilters.forEach(filter => {
		filter.addEventListener('click', switchProjectsCategory);
	})
}

const setCarousels = () => {
	[
		[offerContainer, 768],
		[strengthsContainer, 1400],
		[projectsContainer, 0],
	].forEach(item => {
		initCarousel(...item);
	});
};

document.addEventListener("DOMContentLoaded", () => {
	setCarousels();
	setProjectsFilters();
});
