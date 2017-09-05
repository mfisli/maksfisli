$(document).ready(function(){
	console.log("js loaded");
	
	$(".mobile-menu-icon").on("click", function(){
		$(".primary-nav").toggleClass("active");
		$(this).toggleClass("open");
	})
})