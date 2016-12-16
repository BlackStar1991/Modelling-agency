window.onload = function () {


	console.log("Everything good");


		var boxPhoto= $('.boxPhoto'),
			leftGate = $('.leftGate'),
			rightGate = $('.rightGate'),

			offFilter=$('.offFilter'),

			circleMin = $('.svg_circle_min'),
			circle = $('.svg_circle'),

			rombMin =$('.svg_romb_min'),
			rombMid =$('.svg_romb_mid'),
			romb =$('.svg_romb'),


			navBar =$(".navBar"),


			textForPhoto = $('.textForPhoto p');
	
//  Работа с навигацией сайта

$(".navigationTop").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

$('.my_menu_button').on("click",  function(){

	// navBar.toggleClass('noneVis');

	if ($(".navBar").is(":hidden")) {
        navBar.slideDown();
      } else {
        navBar.slideUp();
      }
});




// carusel
//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/

var owl = $('.owl-carousel');
	owl.owlCarousel({
		items : 1,
		 loop:true,
		 autoHeight: true
		 
	});

	owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

	$(".next_button").click(function(){
		owl.trigger("next.owl");
	});
	$(".prev_button").click(function(){
		owl.trigger("prev.owl");
	});





// Box Model Работа с фильтрами и анимацией

boxPhoto.hover(function(event){

              $(this).find(leftGate).animate({left:'-40%'}, 1000); 
 			  $(this).find(rightGate).animate({left:'100%'}, 1000); 

 			  $(this).find(romb).animate({opacity: 0}, 1000);
			  $(this).find(rombMid).animate({opacity: 0}, 1000);
 			  $(this).find(rombMin).animate({opacity: 0}, 1000);

 			  $(this).find(circle).animate({opacity: 0}, 700);
 			  $(this).find(circleMin).animate({opacity: 0}, 700);

  			  $(this).find('div[class^="ph_"]').toggleClass('offFilter'); // неясно насколько нужен эффект
 			  $(this).find(textForPhoto).toggleClass('colorizeText');  

}, function(event){


	  $(this).find(leftGate).animate({left:'0%'}, 800)
	  $(this).find(rightGate).animate({left:'60%'}, 800);
	  
	  $(this).find(romb).animate({opacity: 1}, 1000);
	  $(this).find(rombMid).animate({opacity: 1}, 1000);
 	  $(this).find(rombMin).animate({opacity: 1}, 1000);

 	  $(this).find(circle).animate({opacity: 1}, 1000);
 	  $(this).find(circleMin).animate({opacity: 1}, 1000);

 	  $(this).find('div[class^="ph_"]').toggleClass('offFilter'); // неясно насколько нужен эффект
 	  $(this).find(textForPhoto).toggleClass('colorizeText'); 


	}); 




//  CaSTING DIV

	


 $('.contactBut').on("click", function(){


 	$('.castingPage').css({display: 'block'});
 })



    var boxWidth = 250;

    function centerBox() {

        /* определяем нужные данные */
        var winWidth = $(window).width();
        var winHeight = $(document).height();
        var scrollPos = $(window).scrollTop();

        /* Вычисляем позицию */

        var disWidth = (winWidth - boxWidth) / 4 ;
        var disHeight = scrollPos ;

        /* Добавляем стили к блокам */
        $('.castingPage').css({ 'left': disWidth + 'px', 'top': disHeight + 'px' });
        // $('.bigCasting').css({ 'width': winWidth + 'px', 'height': winHeight + 'px' });

        return false;
    }
    centerBox();








}