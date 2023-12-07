$(document).ready(function(){
//scroll down
$("#id-down").click(function() {
    $('html, body').animate({
        scrollTop: $("#id-first-section, #id-noImg, #id-one, #id-iam, #id-one1").offset().top
    }, 1000);
});

$('.kl-counter').counterUp({
        delay: 10,
        time: 1000
    });

$('.fa-circle').addClass('wow slideInRight')

});