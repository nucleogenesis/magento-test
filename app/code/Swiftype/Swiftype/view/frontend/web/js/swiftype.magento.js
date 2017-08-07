require(['jquery'],function($) {
	
	$(document).ready(function() {
		console.log("Swiftype...");
		const engineKey = $('meta[name=engine_key]').attr('content');

		$('#search').swiftype({
			engineKey: engineKey
		});
	});
});

