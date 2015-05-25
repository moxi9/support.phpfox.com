
var search = false;
$(document).ready(function() {

	hljs.initHighlightingOnLoad();

	var p = $('.recent-posts');
	if (p.length && !p.hasClass('built')) {
//   	 console.log('ready to build it...');
		p.addClass('built');
		$.getScript('http://community.phpfox.com/forum/recent/', function() {
			__Threads(function(threads) {
				var html = '', iteration = 0;
				for (var i in threads) {
					var t = threads[i];
					iteration++;
					if (iteration >= 6) {
						break;
					}
					html += '<div class="list-group">';
					html	+= '<a href="' + t.permalink + '" class="list-group-item"><h4>' + t.title + '</h4><p class="text-muted">' + t.user + '</p></a>';
					html += '</div>';
				}

				p.html('<p class="text-muted" style="font-size:12px;">Recent Discussions</p>');
				// p.html('');
				p.after(html);
				p.parents('.panel:first').after('<div><a class="btn btn-default" href="http://community.phpfox.com/" role="button">View The Community</a></div>');
			});
		});
	}

	$('img').magnificPopup({
		type:'image',
		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it
			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			elementParse: function(item) {
				item.src = item.el.attr('src');
			}
		}
	});

	$('.search').submit(function() {
		return false;
	});

	if (search === false) {
		$('.search input').focus(function() {
			if (search !== false) {
				return;
			}

			$.ajax({
				url: '/search.json',
				success: function(e) {
					search = e;
				}
			});
		});
	}

	$('.search input').keyup(function() {
		var t = $(this), html = '', el = $('#results'), cnt = 0, nav = $('nav');

		for (var i in search) {
			var term = search[i];
			if (term === null) {
				continue;
			}

			var regex = new RegExp(t.val(),'i');

			if (term.title.search(regex) > -1) {
				html += '<a href="' + term.href + '">' + term.title + '</a>';
				cnt++;
			}
		}

		if (cnt >= 1 && t.val()) {
			el.html(html).show();
			nav.hide();
		}
		else {
			el.html('').hide();
			nav.show();
		}
	});
});