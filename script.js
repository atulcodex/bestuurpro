$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    items : 5,
    responsive: {
    0: {
      items: 2
    },

    600: {
      items: 3
    },

    1024: {
      items: 6
    },

    1366: {
      items: 6
    }
  }
})