jQuery(function ($) {

    "use strict"

    //menu
    $('.mobile-button').on('click', function(){
        $(this).closest('.dashboard').toggleClass('active')
        $(this).closest('.section').find('.layer-close').toggleClass('active')
        $(this).toggleClass('active')
        $('html').toggleClass('overflow-menu')
    })
    
    $('.layer-close').on('click', function(){
        $(this).closest('.section').find('.dashboard').removeClass('active')
        $(this).closest('.section').find('.mobile-button').removeClass('active')
        $(this).removeClass('active')
        $('html').removeClass('overflow-menu')
    })
})
