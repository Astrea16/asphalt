
(function ($) {
	var dsNeedLinks = true;
	$(document).ready(function() {	
		if(dsNeedLinks){
			var $linkArrow = $('<div id="prewbutton"></div><div id="nextbutton"></div>')
			.prependTo('#slider2');      
			$('#nextbutton').click(function(){
				animSlide("next");
				return false;
			})
			$('#prewbutton').click(function(){
				animSlide("prew");
				return false;
			})

		}
	});
});

