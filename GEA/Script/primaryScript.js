$(function primary() {
// default behaviour: load homepage
	$(".contenitore").load( "home.html", function() {
		
		// after loading the page we should load the page manager for links
		$.getScript('Script/pageManager.js', function() {
			// load dynamic links (index.html)
			clickLinks();
		});
	});
    
});
