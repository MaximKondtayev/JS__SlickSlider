let slider = document.getElementsByClassName('slider');
$(() => {
    $('.slider').slick({
        nextArrow: "<img src= '../image/Arrow.png' class = 'next'>",
        prevArrow: "<img src= '../image/Arrow left.png' class = 'prev'>",
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        centerPadding: '50px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});