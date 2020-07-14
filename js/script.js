



	// stellar plugin initialize
	if(screen.width > 991){
		var s = skrollr.init();
	}



$(window).scroll(function(evt){
  if($(window).scrollTop()>0){
    $(".navbar").addClass("nav-change");
  }else{
    $(".navbar").removeClass("nav-change");
  }
});




//緩慢滑動
$(document).on('click', 'a', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});