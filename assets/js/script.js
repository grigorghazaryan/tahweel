$(document).ready(function(){
    $('.product--industries--slider').slick({
        dots: false,
        infinite: true,
        prevArrow: "<div class = 'slick-prev slick--slider--arrow'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-chevron-down' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg></div>",
    nextArrow: "<div class = 'slick-next slick--slider--arrow'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-chevron-down' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg></div>",
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
        ]
    });

    $('.product--packaging--slider').slick({
        dots: false,
        infinite: true,
        prevArrow: "<div class = 'slick-prev slick--slider--arrow'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-chevron-down' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg></div>",
    nextArrow: "<div class = 'slick-next slick--slider--arrow'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-chevron-down' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg></div>",
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
          ]
    });

    $('.product--agriculture--slider').slick({
        dots: false,
        infinite: true,
        prevArrow: "<div class = 'slick-prev slick--slider--arrow'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-chevron-down' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg></div>",
    nextArrow: "<div class = 'slick-next slick--slider--arrow'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-chevron-down' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg></div>",
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
          ]
    });
    
  });

  