console.log('main.js успешно подключен!');

$(".carousel").slick({
    // сокрытие стрелок карусели!
    arrows: false,

    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease',
    dots: true,
    pauseOnDotsHover: true,
    // normal options...
    infinite: true,

    // the magic
    // responsive: [{
    //
    //     breakpoint: 1024,
    //     settings: {
    //         slidesToShow: 3,
    //         infinite: true
    //     }
    //
    // }, {
    //
    //     breakpoint: 600,
    //     settings: {
    //         slidesToShow: 2,
    //         dots: true
    //     }
    //
    // }, {
    //
    //     breakpoint: 300,
    //     settings: "unslick" // destroys slick
    //
    // }]
});

//перенаназначение управляющего класса каруселью .slickPrev на свой .prev
$('.prev').click(function(){
    $('.carousel').slick('slickPrev');
});

$('.next').click(function(){
    $('.carousel').slick('slickNext');
});