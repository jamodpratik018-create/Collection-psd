$('.banner-section .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    autoplay:true,
})

$('.top-section .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    items:1,
    autoplay:true,
    margin:45,
    responsive:{
        767:{
            items:3,
        },
        640:{
            items:2,
            margin:20,
        },
        480:{
            items:1,
        },
        320:{
            items:1,
        }
    }
})


 document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "#menu", {
                       "offCanvas": {
                          "position": "left"
                       },
                       "theme": "dark-contrast",
                       "navbars": [
                          {
                             "position": "top",
                             "content": [
                                "searchfield"
                             ]
                          },
                          {
                             "position": "bottom",
                             "content": [
                                "<a class='fa fa-envelope' title='cart'><img src='images/cart.png'></a> href='#'></a>"
                             ]
                          }
                       ]
                    });
                }
            );