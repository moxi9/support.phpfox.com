
function escapeHtml(text) {
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
};

RegExp.escape = function(s) {
	return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

var types = ['string', 'int', 'object'];

var search = false;
$(document).ready(function() {

	hljs.initHighlightingOnLoad();

	$('td').each(function() {
		var t = $(this), h = t.html();

		for (var i in types) {
			h = h.replace(new RegExp(RegExp.escape('(' + types[i] + ')'), 'gi'), '<mark class="var-type-' + types[i] + '">' + types[i] + '</mark>');
		}
		t.html(h);
	});

	$('.api-form').submit(function() {
		var t = $(this), endpoint = t.find('.api-end-point').val();

		t.find('.btn-default').addClass('hide');
		t.find('.fa').removeClass('hide');

		if (t.find('.base-end-point').length) {
			var b = t.find('.base-end-point').val();
			t.find('.api-end-point').val(endpoint.replace(new RegExp(':id', 'i'), b));
		}

		var data = t.serialize();
		t.find('.api-end-point').val(endpoint);

		$.ajax({
			url: t.attr('action'),
			type: t.find('.api-form-type').val(),
			data: data,
			dataType: 'html',
			success: function(e) {
				t.find('.btn-default').removeClass('hide');
				t.find('.fa').addClass('hide');
				t.find('.api-response').removeClass('hide').find('code').html(escapeHtml(e));
			}
		});

		return false;
	});

	/*
	$('.api-test').click(function() {
		var t = $(this), data = t.find('div').html(), code;

		return false;

		if (data == 'true') {
			data = '';
		}

		// console.log(data.toString());

		t.after('<pre class="hide"><code></code></pre>');
		code = t.parents('.api-info:first').find('code');

		var d = new Date();
		var n = d.toDateString();
		var type = t.data('type');

		data = data.replace('(time)', n);
		data = data.replace(new RegExp('__random__', 'g'), new Date().getTime());

		if (!data) {
			data = '{}';
		}

		t.replaceWith('<i class="api-spin fa fa-spin fa-circle-o-notch"></i>');
		$.ajax({
			url: 'http://localhost/phpfox/4x_/api' + t.data('endpoint'),
			type: type,
			data: ((type != 'GET') ? $.parseJSON(data) : ''),
			dataType: 'html',
			beforeSend: function (xhr) {

			},
			complete: function(e) {
				code.html(escapeHtml(e));
				code.parent().removeClass('hide');
				$('.api-spin').remove();
			}
		});
	});
	*/

	$('.block-header').click(function() {
		var t = $(this);

		window.location.href = t.find('h2 a').attr('href');
	});

	var p = $('.recent-posts');
	if (p.length && !p.hasClass('built')) {
//   	 console.log('ready to build it...');
		p.addClass('built');
		$.getScript('http://community.phpfox.com/forum/recent/', function() {
			__Threads(function(threads) {
				var html = '', iteration = 0;

				html += '<div class="list-group">';
				for (var i in threads) {
					var t = threads[i];
					iteration++;
					if (iteration >= 6) {
						break;
					}
					html += '<a href="' + t.permalink + '" class="list-group-item"><h4>' + t.title + '</h4><p class="text-muted">' + t.user + '</p></a>';
				}
				html += '</div>';

				p.html(html);
				// p.html('');
				// p.after(html);
				// p.parents('.panel:first').after('<div><a class="btn btn-default" href="http://community.phpfox.com/" role="button">View The Community</a></div>');
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

	$('.pf-search').focus(function() {
		var t = $(this), position = $('.form').offset();

		if (!t.hasClass('focus')) {
			t.addClass('focus');
			$('html, body').animate({
				scrollTop: (position.top - 65)
			});
		}
	});
});
