$(document).ready(function() {

	var $mainLayer 	= $('#main-layer');
	var $navLayer 	= $('#nav-layer');
	var $navToggle 	= $('#menu-toggle');

	// activate menu toggle
	$navToggle.click(function(){
		var menuShown = ($mainLayer.css('left') !='0px') ? true : false;
		var hideMenu = function(){
			$mainLayer
				.css('left','');
			;
			return;
		}
		var showMenu = function(){
			var menuWidth=$navLayer.outerWidth();
			$mainLayer
				.css('left',menuWidth)
			;
			return;
		}
		if(menuShown){ hideMenu() }else{ showMenu() };
	});
});