$(document).foundation();

jQuery(window).scroll(function() {
    if ($(document).scrollTop() >= 150) {
          // $('#logo').attr('src', 'img/Acme_Monogram_Colour.png')
        $("#header").addClass("small");
    }
    if ($(document).scrollTop() < 150) {
      $("#header").removeClass("small");
    }
});
