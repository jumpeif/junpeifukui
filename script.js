$(function(){

    $('body').fadeIn(1000);
    

    $('#menu-bar').click(function(){
        $('#menu-modal').fadeIn();
    });

    $('.close-modal').click(function(){
        $('#menu-modal').fadeOut();
    });

	
});
