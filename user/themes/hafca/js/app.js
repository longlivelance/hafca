$(document).foundation();

jQuery(window).scroll(function() {
    var is_dropdown = $('#header .dropdown ').length > 0;
    if ($(document).scrollTop() >= 150 && is_dropdown) {
          // $('#logo').attr('src', 'img/Acme_Monogram_Colour.png')
        $("#header").addClass("small");
    }
    if ($(document).scrollTop() < 150 && is_dropdown) {
      $("#header").removeClass("small");
    }
    if (!is_dropdown) {
      $("#header").addClass("small");
    }
});
