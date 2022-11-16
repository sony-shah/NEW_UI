var options = {
  accessibility: true,
  prevNextButtons: true,
  // autoPlay: true,
  autoPlay: 2000,
  pauseAutoPlayOnHover: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 45,
      x3: 15
  }
};

var carousel = document.querySelector("[data-carousel]");
var slides = document.getElementsByClassName("carousel-cell");
var flickity = new Flickity(carousel, options);

flickity.on("scroll", function () {
  flickity.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = ((slide.target + flickity.x) * -1) / 3;
    image.style.backgroundPosition = x + "px center";
  });
});
