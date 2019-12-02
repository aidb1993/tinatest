$(document).ready(() => {
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{

      breakpoint: 2000,
      settings: "unslick"} ,
      
      {

        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
  
      }
    
    ]
  });
});