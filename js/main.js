var swiper = new Swiper(".swiper-mision", {
    spaceBetween: 30,
    autoHeight: true,    
    // autoplay: {
    //   delay: 15000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".pagination-mision",
      clickable: true,
      // type: "fraction",
    },
    navigation: {
      nextEl: ".next-mision",
      prevEl: ".prev-mision",
    },
    
});


// Menú hamburguesa
if( jQuery('#nav-toogle').length > 0 ) {
    jQuery('#nav-toogle').click(function() {        
        jQuery(this).toggleClass('open');        
        jQuery('body').toggleClass('open-nav-xs');
    });
};

jQuery(".anchor").click(function( e ) {
    e.preventDefault();
    e.stopPropagation();
    $target = $(this);
    jQuery('html, body').animate({
        scrollTop: jQuery($target.attr('href')).offset().top
    }, 1000);
});


if( jQuery('header nav li a').length > 0 ) {
    jQuery('header nav li a').click(function() {  
        jQuery('body').removeClass('open-nav-xs');      
        jQuery('#nav-toogle').removeClass('open');
    });
};

AOS.init();

if(window.matchMedia("(max-width: 640px)").matches) {
    
}
else{    
  jQuery(window).scroll(function(){
      var scroll = 50;
      if( jQuery(window).scrollTop() > scroll ){
          jQuery('header').addClass('fixed-top');              
      }else{
          jQuery('header').removeClass('fixed-top');            
      }          
  });
}