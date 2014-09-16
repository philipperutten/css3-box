$(document).ready(function() {

	var $mainLayer 	= $('#main-layer');
	var $navLayer 	= $('#nav-layer');
	var $navToggle 	= $('#menu-toggle');

	var menuShowing = function(){
		return ($mainLayer.css('left') !='0px') ? true : false;
	}
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

	// show/hide menu with toggle button
	$navToggle.click(function(){
		if(menuShowing()){ hideMenu() }else{ showMenu() };
	});
	// hide menu when clicking anywhere
	$(document).click(function(){
		if(menuShowing()){ hideMenu() };
	});
});