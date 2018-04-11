
$(function() {
 $('#scroll1').click(function(){
	   $('html, body').animate({
	    scrollTop: $(".page-about").offset().top
	}, 1000);
 });
});


$(document).ready(function(){
    $("#explore").click(function(){
        $("#explore p").toggle();
    });
});

$(document).ready(function(){
    $("#connect").click(function(){
        $("#connect p").toggle();
    });
});

$(document).ready(function(){
    $("#ride").click(function(){
        $("#ride p").toggle();
    });
});





// $(function() {
//  $('#scroll2').click(function(){
// 	   $('html, body').animate({
// 	    scrollTop: $("#app").offset().top
// 	}, 1000);
//  });
// });





