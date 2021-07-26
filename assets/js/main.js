$(document).ready(function() {
    // Feature Work Slider
    $('.product-image-slide').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        draggable: false,
        nextArrow: '<i class="fas fa-arrow-circle-right product-image-slide-nxt-arrow"></i>',
        prevArrow: '<i class="fas fa-arrow-circle-left product-image-slide-prev-arrow"></i>',
    });
    // Testimonial Slider
    $('.testimonial-slider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        draggable: true,
        arrows: false,
    });
});