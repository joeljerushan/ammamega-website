(function() {
    var burger = document.querySelector('.ix_menu_bar');
    var menu = document.querySelector('#ix_menu_container');
    burger.addEventListener('click', function() {
        burger.classList.toggle('ix_menu_btn_active');
        menu.classList.toggle('ix_menu_container_active');
    });
})();

$(document).ready(function(){
    $('.ix_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.ix_slider_mobile').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

    
});