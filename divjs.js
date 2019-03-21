(function($){
	$.fn.printWindow = function(options){
		var settings = $.extend({
			title	: jQuery('title').text(), // default title for printer
			css		: 'extend', // get all css from current page [extend: all, style only styles, link only meta links]
			ecss	: null,
			lcss	: [], // list of external css that will goes
			keepHide: [], // hide those elements during print window in a system
		}, options);
		
		// create html document
		var html = document.createElement('html');
		
		// head area 
		var head = document.createElement('head');
		if(settings.title != null && settings.title != ''){
			head = $(head).append($(document.createElement('title')).text(settings.title));
		}
		else{
			head = $(head);
		}
		
		// encoding and css add
		if(settings.css == 'extend' || settings.css == 'link'){
			//console.log('Zero gravity');
			$('link[rel=stylesheet]').each(function(index, linkcss){
				head = head.append($(document.createElement('link')).attr('href', $(linkcss).attr('href')).attr('rel', 'stylesheet').attr('media', 'print'));
			})
		}
		
		// extra links
		for(var i = 0; i < settings.lcss.length; i++){
			head = head.append($(document.createElement('link')).attr('href', settings.lcss[i]).attr('rel', 'stylesheet').attr('media', 'print'));
		}
		
		if(settings.css == 'extend' || settings.css == 'style'){
			head.append($(document.createElement('style')).append($('style').clone().html()));
		}
		
		if(settings.ecss != null){
			//pass
		}
		
		
		// body area 
		var body = document.createElement('body');
		body = $(body).append($(this).clone().html());
		
		//hide elemts from body
		for(var i = 0; i < settings.keepHide.length; i++){
			$(body).find(settings.keepHide[i]).each(function(index, data){
				$(this).css('display', 'none');
			})
		}
		
		// add html, head and body
		html = $(html).append(head).append(body);
		
		// print pdf area 
		// if there is multiple elements has in the selector then it will go for the first index only
		var fn_window = document.open('', settings.title, 'scrollbars=yes');
		fn_window.document.write(html.clone().html()); // write the html data into document 
		
		setTimeout(function(){fn_window.print()}, 100); // print the functional window
		
		return true;
	}
}(jQuery));