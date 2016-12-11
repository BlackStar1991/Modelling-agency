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


			textForPhoto = $('.textForPhoto p');
			

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













}