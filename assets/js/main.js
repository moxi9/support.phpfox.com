
var search = false;
$(document).ready(function() {
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
		var t = $(this), html = '', el = $('#results'), cnt = 0;

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
		}
		else {
			el.html('').hide();
		}
	});
});