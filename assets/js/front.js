let transwest_nav = document.getElementById("transwest_nav");
window.onscroll = function() {transwest_scroll()};
window.addEventListener('resize', transwest_resize);


function transwest_scroll() {
  universal_sticky();
}

function transwest_resize() {
    universal_sticky();
}

function universal_sticky() {
    if(transwest_nav != null) {
        if (document.body.scrollTop > window.innerHeight * 0.5 || document.documentElement.scrollTop > window.innerHeight * 0.5) {
            if(transwest_nav.classList.contains("sticky") == false) {
                transwest_nav.classList.add("sticky") 
            }

            if(transwest_nav.classList.contains("show") == false) {
                setTimeout(function(){
                    transwest_nav.classList.add("show");
                }, 200);
            }
          } else {
            if(transwest_nav.classList.contains("sticky") == true) {
                transwest_nav.classList.remove("sticky") 
            }
            if(transwest_nav.classList.contains("show") == true) {
                transwest_nav.classList.remove("show") 
            }
        }
    }
}
    

baguetteBox.run('.tz-gallery');
universal_sticky();

$('.link-scroll').on('click', function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - transwest_nav.clientHeight
    }, 1000);

    $('.navbar-collapse.collapse').toggleClass('show');

    e.preventDefault();

    
    
});

$('.logo-scroll').on('click', function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - transwest_nav.clientHeight
    }, 1000);

    e.preventDefault();

    
    
});