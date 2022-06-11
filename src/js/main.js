const container = document.querySelector(".clients__container");

document.addEventListener("DOMContentLoaded", () => {
	if(window.innerWidth < 768) {
        const carousel = new Flickity(container, {
            cellAlign: "center",
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            autoPlay: true,
            pauseAutoPlayOnHover: false,
            wrapAround: true,
        });
    }
});
