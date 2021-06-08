$(Document).ready(function(){
    
    //owl carousel
   
    $('.owl-carousel').owlCarousel({
        margin:15,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive:{
        0: {
            items: 1
        },
            576: {
                items:1
            },
        
        768: {
            items: 1
        },
            992: {
                items:2
            },
            1000:{
                items:2
            },
            1200: {
                items:3
            },
            1920:{
                items : 3
            },
    }
    });
    
    //wow
    
    new WOW().init();
    
});