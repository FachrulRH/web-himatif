document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    classes: {
      arrows: "splide__arrows arrows",
      arrow: "splide__arrow arrow",
      prev: "splide__arrow--prev arrow-prev",
      next: "splide__arrow--next arrow-next",
      pagination: "splide__pagination splide-pagination",
      page: "splide__pagination__page splide-pagination-page",
    },
    type: "loop",
    autoplay: true,
    rewind: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    perPage: 2,
  }).mount();
});
