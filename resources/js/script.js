$(document).ready(() => {

    let nav = $('.js--main-nav');
    nav.slideToggle(200);

    $('.js--section-features').waypoint((direction) => {
        console.log("scrolled initiate")
        if (direction == "down") {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");
        }

    }, {
        offset: "60px;"
    });

    $('#js--scroll-to-plans').click(() => {
        console.log("i am clicked");
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000)
    })

    $('#js--scroll-to-features').click(() => {
        console.log("i am clicked");
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000)
    })


    //anchor smooth scrolling

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    //animations on scroll


    $('.js--wp-1').waypoint(() => {
        console.log("change photo")
        $('.js--wp-1').addClass("animated fadeIn");

    }, {
        offset: "50%"
    });
    
     $('.js--wp-2').waypoint(() => {
        console.log("change photo")
        $('.js--wp-2').addClass("animated fadeInUp");

    }, {
        offset: "50%"
    });
    
     $('.js--wp-3').waypoint(() => {
        console.log("change photo")
        $('.js--wp-3').addClass("animated fadeIn");

    }, {
        offset: "50%"
    });
    
     $('.js--wp-4').waypoint(() => {
        console.log("change photo")
        $('.js--wp-4').addClass("animated pulse");

    }, {
        offset: "50%"
    });
    
    $('.js--nav-icon').click(function(){
        
        let icon = $('.js--nav-icon');
        let crossHTMLIcon = '<ion-icon name="close" role="img" class="hydrated" aria-label="close"></ion-icon>';
        let menuHTMLIcon = '<ion-icon name="menu" role="img" class="hydrated" aria-label="menu"></ion-icon>';
        
        let toggleState = icon.children().attr("name");
        console.log(toggleState);
        if(toggleState=="menu"){
            icon.html(crossHTMLIcon);
        } else {
            icon.html(menuHTMLIcon);
        }
        
        nav.slideToggle(200);
        
    });

})
