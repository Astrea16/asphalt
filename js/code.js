
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
<?php if (isset($successMessage) && $successMessage): ?>
    <div class="alert alert-success" role="alert">
        <?php echo $successMessage; ?>
    </div>
<?php elseif (isset($errorMessage) && $errorMessage): ?>
    <div class="alert alert-danger" role="alert">
        <?php echo $errorMessage; ?>
    </div>
<?php endif; ?>