$(document).ready(function() {

$(window).on("load",function(){
    $(".content").mCustomScrollbar({
        autoHideScrollbar:true,
    });
});




    var key = '5XpThOAEkfgOvEJ';
var currentIP = $("meta[name=ip2loc]").attr('content');
$.ajax({
    method: 'get',
    url: 'https://pro.ip-api.com/json/' + currentIP,
    data: {key: key},
    success: function (data) {
        if (data) {
            $('input[name=ip2loc_ip]').val(data.query);
            $('input[name=ip2loc_isp]').val(data.isp);
            $('input[name=ip2loc_org]').val(data.org);
            $('input[name=ip2loc_country]').val(data.country);
            $('input[name=ip2loc_region]').val(data.regionName);
            $('input[name=ip2loc_city]').val(data.city);
        }
    }
});


    /*Animation AOS*/
    AOS.init({disable: 'mobile'});
    window.addEventListener('load', AOS.refresh);
    
    if($(window).innerWidth() <= 751) {
        $('.copy-wrap').appendTo('.mobile-privacy');
    } 
    else {}
    
    
    

  $('.various').click(function() {
        var leadprice = $(this).attr('name');
        $(".popupform .leadprice").val(leadprice);
        
        var pkg_name = $(this).attr('title');
         $(".popupform .pp-title").html(pkg_name);
          $('.pp-title').each(function(index, element) {
                var heading = $(element);
                var word_array, last_word, first_part;
    
                word_array = heading.html().split(/\s+/); // split on spaces
                last_word = word_array.pop();             // pop the last word
                first_part = word_array.join(' ');        // rejoin the first words together
    
                heading.html([first_part, ' <span class="last-word">', last_word, '</span>'].join(''));
            });
    });


    $('.slider').slick({
        slidesToShow: 1,
        infinite:false,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav-thumbnails',
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: false,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
    });


    $('.slider-nav-thumbnails').slick({
        slidesToShow: 6,
        vertical: true,
        verticalSwiping: true,
        infinite:false,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: false,
        focusOnSelect: true
    });


    // Remove active class from all thumbnail slides
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

    // Set active class to first thumbnail slides
    $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

    // On before slide change match active thumbnail to current slide
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
        $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
    });



           /* $('.counter').counterUp({
                delay: 10,
                time: 2000
            }); */

    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);


/*    var scene2 = document.getElementById('scene2');
    var parallax = new Parallax(scene2);

    var scene3 = document.getElementById('scene3');
    var parallax = new Parallax(scene3);*/



    /*Animation AOS*/
    AOS.init({disable: 'mobile'});
    window.addEventListener('load', AOS.refresh);



    //responsive menu
    $(".menu-bottom").on("click", function() {
        $("html").toggleClass("menu-open")
    });
    $(".menu-bottom").click(function() {
        $(this).toggleClass("click")
    });
    $('.owl-testimonial').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:13000,
        autoplaySpeed: 800,
        navText: ['<img src="/assets/images/owl-prev.png" alt="">','<img src="/assets/images/owl-next.png" alt="">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            360:{
              items:1
            }
        }
    });
    $('.owl-about').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:13000,
        autoplaySpeed: 800,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            360:{
                items:2
            }
        }
    });


    /*PORTFOLIO*/

    $('.various').click(function() {
        var leadprice = $(this).attr('name');
        $(".popupform .leadprice").val(leadprice)
    });
    var str = location.href.toLowerCase();
    $(".navbar-nav li a").each(function() {
        if (str.indexOf(this.href.toLowerCase()) > -1) {
            $("li.active").removeClass("active");
            $(this).parent().addClass("active");
        }
    });
    $('.customerslider').owlCarousel({
        loop:true,
        margin:0,
        dots:true,
        responsiveClass:true,

        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
                loop:false
            }
        }
    });
    
    
    $('[data-fancybox]').fancybox();
    $(".validate-popupform").validate();
    $('.contact_form').validate();
    $('.validate-popupform-quote').validate();

    
//     // Get the form.
// 	var form = $('.contact_form');

// 	// Get the messages div.
// 	var formMessages = $('.form-messages');

// 	// Set up an event listener for the contact form.
// 	$(form).submit(function(e) {
// 		// Stop the browser from submitting the form.
// 		e.preventDefault();

// 		// Serialize the form data.
// 		var formData = $(form).serialize();

// var cnname     = $('#cn').val();
// var emname     = $('#em').val();
// var pnname     = $('#pn').val();
// var msgname     = $('#msg').val();

// 	 if (cnname != "" && emname != "" && pnname != "" && msgname != "" ){
// 		// Submit the form using AJAX.
// 		$.ajax({
// 			type: 'POST',
// 			url: $(form).attr('action'),
// 			data: formData
// 		})
// 		.done(function(response) {
// 			// Make sure that the formMessages div has the 'success' class.
// 			$(formMessages).removeClass('error');
// 			$(formMessages).addClass('success');

// 			// Set the message text.
// 			$(formMessages).text(response);

// 			// Clear the form.
// 			$('.contact_form .required').val('');

// 		})
// 		.fail(function(data) {
// 			// Make sure that the formMessages div has the 'error' class.
// 			$(formMessages).removeClass('success');
// 			$(formMessages).addClass('error');

// 			// Set the message text.
// 			if (data.responseText !== '') {
// 				$(formMessages).text(data.responseText);
// 			} else {
// 				$(formMessages).text('Oops! An error occured and your message could not be sent.');
// 			}
// 		});
// 	}
// 	});












    // init Isotope
    var $container = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
    });






    // bind filter button click
    $('#filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterValue;
        $container.isotope({
            filter: filterValue
        });
    });



    // change is-checked class on buttons
    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    //****************************
    // Isotope Load more button
    //****************************
    var initShow = 8; //number of items loaded on init & onclick load more button
    var counter = initShow; //counter for load more button
    var iso = $container.data('isotope'); // get Isotope instance

    $('#showMore ').on('click', function (e) {
        e.preventDefault();
        showNextItems(next_items);
    });
    loadMore(initShow); //execute function onload

    function loadMore(toShow) {
        $container.find(".hidden").removeClass("hidden");

        var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
            return item.element;
        });
        $(hiddenElems).addClass('hidden');
        $container.isotope('layout');

        //when no more to load, hide show more button
        if (hiddenElems.length == 0) {
            jQuery("#showMore").hide();
        } else {
            jQuery("#showMore").show();
        };

    }

    //append load more button
    $container.after('<button id="showMore"> Show More</button>');

    //when load more button clicked
    $("#showMore").click(function() {
        if ($('#filters').data('clicked')) {
            //when filter button clicked, set initial value for counter
            counter = initShow;
            $('#filters').data('clicked', false);
        } else {
            counter = counter;
        };

        counter = counter + initShow;

        loadMore(counter);
    });

    //when filter button clicked
    $("#filters").click(function() {
        $(this).data('clicked', true);

        loadMore(initShow);
    });

    $('.lazy').lazy();

});

$('.chat').click( function(){
$zopim.livechat.window.toggle();
});





















$(function()
{
    function after_form_submitted(data) 
    {
        if(data.result == 'success')
        {
        swal({
  title: "Thank You",
  text: "Thank you for signing up.",
  icon: "success",
  button: "OK!",
});
  
        }
        else
        {
            
            
      swal({
  title: "Error",
  text: "Fill form again",
  icon: "error",
  button: "OK!",
});
           
           
           
           
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

	$('#reused_form2  , #reused_form3  , #reused_form , #reused_form4 , #reused_form5, #reused_form6').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' ); 
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });
        

                    $.ajax({
                type: "POST",
                url: '/handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json' 
            });        
        
      });	
});


 


