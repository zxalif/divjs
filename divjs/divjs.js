(function($){
	$.fn.printElement = function(options){
		var settings = $.extend({
			title	: jQuery('title').text(),
			css		: 'extend',
			ecss	: null,
			lcss	: [],
			keepHide: [],
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

		// add local css links
		if(settings.css == 'extend' || settings.css == 'link'){
			$('link[rel=stylesheet]').each(function(index, linkcss){
				head = head.append($(document.createElement('link')).attr('href', $(linkcss).attr('href')).attr('rel', 'stylesheet').attr('media', 'print'));
			})
		}

		// add extra links
		for(var i = 0; i < settings.lcss.length; i++){
			head = head.append($(document.createElement('link')).attr('href', settings.lcss[i]).attr('rel', 'stylesheet').attr('media', 'print'));
		}

		// add page css to head
		if(settings.css == 'extend' || settings.css == 'style'){
			head.append($(document.createElement('style')).append($('style').clone().html()));
		}

		// external css for media print
		if(settings.ecss != null){
			head.append($(document.createElement('style')).html(settings.ecss));
		}

		// body area
		var body = document.createElement('body');
		body = $(body).append($(this).clone().html());

		// hide selected elements
		for(var i = 0; i < settings.keepHide.length; i++){
			$(body).find(settings.keepHide[i]).each(function(index, data){
				$(this).css('display', 'none');
			})
		}

		// add elements together
		html = $(html).append(head).append(body);

		// create functional window
		var fn_window = document.open('', settings.title, 'width='+$(document).width()+',height=' + $(document).width() + '');
		// write html to new window
		fn_window.document.write(html.clone().html());

		// print and close window
		setTimeout(function(){fn_window.print();fn_window.close();}, 250);

		return true;
	}
}(jQuery));
