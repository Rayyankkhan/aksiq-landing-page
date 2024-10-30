(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();

	// // Sticky Navbar
    // $(window).scroll(function () {
    //     if ($(window).width() > 992) {
    //         if ($(this).scrollTop() > 45) {
    //             $('#header-container').removeClass('position');
    //         } else {
    //             $('#header-container').addClass('position');
    //         }
    //     } 
    // });
	
	// $(window).scroll(function () {
    //     if ($(window).width() > 992) {
    //         if ($(this).scrollTop() > 45) {
    //             $('.container-fluid .position  .sticky-top').removeClass('position');
    //         } else {
    //             $('.container-fluid .sticky-top').addClass('position');
    //         }
    //     } 
    // });

//     // Sticky Navbar
//     $(window).scroll(function () {
//     if ($(window).width() > 992) {
//         if ($(this).scrollTop() > 45) {
//             // Add shadow and remove the position class
//             $('.sticky-top .container-fluid').addClass('shadow-sm fulwidth ');
//             $('.sticky-top').removeClass('position ');
//             $('nav.navbar').removeClass('bdr bg-black'); // Remove .bdr class
//             console.log('Scroll position is greater than 45px: .bdr removed');
//         } else {
//             // Remove shadow and add the position class
//             $('.sticky-top .container-fluid ').removeClass('shadow-sm fulwidth   ');
//             $('.sticky-top').addClass('position ');
//             $('nav.navbar').addClass('bdr bg-black'); // Add .bdr class
//             console.log('Scroll position is less than or equal to 45px: .bdr added');
//         }
//     } else {
//         // For screen width less than or equal to 992
//         $('.sticky-top .container-fluid').addClass('shadow-sm fulwidth ');
//         $('.sticky-top').removeClass('position ');
//         $('nav.navbar').removeClass('bdr '); // Optional: can keep it or adjust as needed
//     }
// });

	

    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 0,
        nav : false,
        
    });



    // Project carousel
    // $(".project-carousel").owlCarousel({
    //     // autoplay: true,
    //     // slideTransition: 'linear',
    //     // autoplayTimeout: 0,
    //     // autoplaySpeed: 3000,
    //     // autoplayHoverPause: false,
    //     // items: 8,
    //     // center: false,
    //     dots: false,
    //     // loop: true,
    //     items: 7,
    //     loop: true,
    //     autoplay: true,
    //     slideTransition: 'linear',
    //     autoplayTimeout: 0,
    //     autoplaySpeed: 5000,
    //     autoplayHoverPause: false,
    //     margin: 8,
    //     nav : false,
    //     navText : [
    //         '<i class="bi bi-arrow-left text-white"></i>',
    //         '<i class="bi bi-arrow-right text-white"></i>'
    //     ],
    //     responsiveClass: true,
    //     responsive: {
    //         0:{
    //             items:3
    //         },
    //         390: {
    //             items: 4
    //         },
    //         576:{
    //             items:4
    //         },
    //         768:{
    //             items:3
    //         },
    //         992:{
    //             items:4
    //         },
    //         1200:{
    //             items:6
    //         },
    //         1445: {
    //             items: 8
    //         }
    //     }
    // });

    // $(".project-carousel").owlCarousel({
    //     // autoplay: true,
    //     // slideTransition: 'linear',
    //     // autoplayTimeout: 0, // no delay between items
    //     // autoplaySpeed: 5000, // adjust this for scroll speed
    //     // autoplayHoverPause: false,
    //     items: 7,
    //     loop: true,
    //     margin: 8,
    //     dots: false,
    //     nav: false,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 3
    //         },
    //         390: {
    //             items: 4
    //         },
    //         576: {
    //             items: 4
    //         },
    //         768: {
    //             items: 3
    //         },
    //         992: {
    //             items: 4
    //         },
    //         1200: {
    //             items: 6
    //         },
    //         1445: {
    //             items: 8
    //         }
    //     }
    // });

    // $(".project-carousel").owlCarousel({
    //     items: 7,
    //     loop: true,
    //     margin: 8,
    //     dots: false,
    //     nav: false,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 3
    //         },
    //         390: {
    //             items: 4
    //         },
    //         576: {
    //             items: 4
    //         },
    //         768: {
    //             items: 3
    //         },
    //         992: {
    //             items: 4
    //         },
    //         1200: {
    //             items: 6
    //         },
    //         1445: {
    //             items: 8
    //         }
    //     }
    // });

    $(".project-carousel").owlCarousel({
        items: 8,
        loop: true,
        margin: 8,
        dots: false,
        nav: false,
        navText : [
                    '<i class="bi bi-arrow-left text-white"></i>',
                    '<i class="bi bi-arrow-right text-white"></i>'
                ],
        responsiveClass: true,
        responsive: {
            0: { items: 2 },
            390: { items: 4 },
            576: { items: 4 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 6 },
            1445: { items: 8 }
        }
    });


    function continuousScroll() {
        let $carousel = $('.project-carousel .owl-stage');
    
        function scroll() {
            let firstItemWidth = $carousel.children().first().outerWidth(true);
            $carousel.animate(
                { marginLeft: -firstItemWidth },
                2000, // Adjust scroll speed here
                'linear',
                function () {
                    $carousel.css('margin-left', '0');
                    $carousel.children().first().appendTo($carousel);
                    scroll(); // Recursive call to keep scrolling
                }
            );
        }
    
        scroll();
    }
    
    continuousScroll();
    
    
    
    

    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        // margin: 25,
        nav : true,
        navText: [
            ' <div  class="btn btn-outline-dark ">Previous</div> ',
            '<div class="btn btn-outline-dark ">Next </div>  </div>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);




