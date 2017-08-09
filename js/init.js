$(document).ready(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('.modal').modal();
    $('#modal1').modal('open');
    $('#modal1').modal('close');

	$('.slider').slider({full_width: true});
    $('.chips').material_chip();
    $('.chips-initial').material_chip('data');
});