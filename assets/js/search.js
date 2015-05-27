/**
 * @license
 * Fuse - Lightweight fuzzy-search
 *
 * Copyright (c) 2012 Kirollos Risk <kirollos@gmail.com>.
 * All Rights Reserved. Apache Software License 2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(t){function e(t,n){this.list=t,this.options=n=n||{};var i,o,s,r;for(i=0,r=["sort","includeScore","shouldSort"],o=r.length;o>i;i++)s=r[i],this.options[s]=s in n?n[s]:e.defaultOptions[s];for(i=0,r=["searchFn","sortFn","keys","getFn"],o=r.length;o>i;i++)s=r[i],this.options[s]=n[s]||e.defaultOptions[s]}var n=function(t,e){if(e=e||{},this.options=e,this.options.location=e.location||n.defaultOptions.location,this.options.distance="distance"in e?e.distance:n.defaultOptions.distance,this.options.threshold="threshold"in e?e.threshold:n.defaultOptions.threshold,this.options.maxPatternLength=e.maxPatternLength||n.defaultOptions.maxPatternLength,this.pattern=e.caseSensitive?t:t.toLowerCase(),this.patternLen=t.length,this.patternLen>this.options.maxPatternLength)throw new Error("Pattern length is too long");this.matchmask=1<<this.patternLen-1,this.patternAlphabet=this._calculatePatternAlphabet()};n.defaultOptions={location:0,distance:100,threshold:.6,maxPatternLength:32},n.prototype._calculatePatternAlphabet=function(){var t={},e=0;for(e=0;e<this.patternLen;e++)t[this.pattern.charAt(e)]=0;for(e=0;e<this.patternLen;e++)t[this.pattern.charAt(e)]|=1<<this.pattern.length-e-1;return t},n.prototype._bitapScore=function(t,e){var n=t/this.patternLen,i=Math.abs(this.options.location-e);return this.options.distance?n+i/this.options.distance:i?1:n},n.prototype.search=function(t){if(t=this.options.caseSensitive?t:t.toLowerCase(),this.pattern===t)return{isMatch:!0,score:0};var e,n,i,o,s,r,a,h,p,c=t.length,l=this.options.location,f=this.options.threshold,u=t.indexOf(this.pattern,l),d=this.patternLen+c,g=1,m=[];for(-1!=u&&(f=Math.min(this._bitapScore(0,u),f),u=t.lastIndexOf(this.pattern,l+this.patternLen),-1!=u&&(f=Math.min(this._bitapScore(0,u),f))),u=-1,e=0;e<this.patternLen;e++){for(i=0,o=d;o>i;)this._bitapScore(e,l+o)<=f?i=o:d=o,o=Math.floor((d-i)/2+i);for(d=o,s=Math.max(1,l-o+1),r=Math.min(l+o,c)+this.patternLen,a=Array(r+2),a[r+1]=(1<<e)-1,n=r;n>=s;n--)if(p=this.patternAlphabet[t.charAt(n-1)],a[n]=0===e?(a[n+1]<<1|1)&p:(a[n+1]<<1|1)&p|((h[n+1]|h[n])<<1|1)|h[n+1],a[n]&this.matchmask&&(g=this._bitapScore(e,n-1),f>=g)){if(f=g,u=n-1,m.push(u),!(u>l))break;s=Math.max(1,2*l-u)}if(this._bitapScore(e+1,l)>f)break;h=a}return{isMatch:u>=0,score:g}};var i=function(t,e,n){var s,r,a;if(e){a=e.indexOf("."),-1!==a?(s=e.slice(0,a),r=e.slice(a+1)):s=e;var h=t[s];if(h)if(r||"string"!=typeof h&&"number"!=typeof h)if(o.isArray(h))for(var p=0,c=h.length;c>p;p++)i(h[p],r,n);else r&&i(h,r,n);else n.push(h)}else n.push(t);return n},o={deepValue:function(t,e){return i(t,e,[])},isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)}};e.defaultOptions={id:null,caseSensitive:!1,includeScore:!1,shouldSort:!0,searchFn:n,sortFn:function(t,e){return t.score-e.score},getFn:o.deepValue,keys:[]},e.prototype.search=function(t){var e,n,i,s,r=new this.options.searchFn(t,this.options),a=this.list,h=a.length,p=this.options,c=this.options.keys,l=c.length,f=[],u={},d=[],g=function(t,e,n){if(void 0!==t&&null!==t)if("string"==typeof t)i=r.search(t),i.isMatch&&(s=u[n],s?s.score=Math.min(s.score,i.score):(u[n]={item:e,score:i.score},f.push(u[n])));else if(o.isArray(t))for(var a=0;a<t.length;a++)g(t[a],e,n)};if("string"==typeof a[0])for(var m=0;h>m;m++)g(a[m],m,m);else for(var m=0;h>m;m++)for(n=a[m],e=0;l>e;e++)g(p.getFn(n,c[e]),n,m);p.shouldSort&&f.sort(p.sortFn);for(var y=p.includeScore?function(t){return f[t]}:function(t){return f[t].item},v=p.id?function(t){f[t].item=p.getFn(f[t].item,p.id)[0]}:function(){},m=0,b=f.length;b>m;m++)v(m),d.push(y(m));return d},"object"==typeof exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):t.Fuse=e}(this);

var searchCache = false, fuse;
var PF_Search = function(param) {

	var control = (param.listen instanceof jQuery ? param.listen : $(param.listen));
	if (control.length) {
		if (searchCache === false) {
			control.focus(function() {
				if (searchCache !== false) {
					return;
				}

				$.ajax({
					url: (window.location.hostname == 'localhost' ? 'http://localhost/moxi9/moxi9.com/search' : 'http://store.phpfox.com/search'),
					success: function(e) {
						searchCache = e;

						var options = {
							keys: ['title'],
							includeScore: false
						}

						fuse = new Fuse(searchCache, options);
					}
				});
			});
		}

		/*
		control.focus(function() {
			if (form.hasClass('in-focus')) {
				return;
			}

			form.addClass('in-focus');
			$('html, body').animate({
				scrollTop: (position.top - 80)
			});
		});
		*/

		var current
		control.keyup(function(e) {
			if (fuse === null) {
				return;
			}

			var t = $(this), el = $(param.id), cnt = 0, limit = 20, words = t.val().split(' '), cache = {}, html = '';

			if (e.keyCode != 40
				&& e.keyCode != 38
				&& e.keyCode != 13
				) {

				html = '';
				var word = t.val().split(' ');
				var result = fuse.search(t.val());
				if (result) {
					for (var i in result) {
						var term = result[i]

						var title = term.title;
						for (var w in word) {
							if (!word[w]) {
								continue;
							}

							var pattern = new RegExp("("+word[w]+")", "gi");
							title = title.replace(pattern, "<mark>$1</mark>");
						}

						html += '<a href="' + term.url + '">' + title + '<p>in ' + term.in + '</p></a>';

						cnt++;
						if (cnt >= limit) {
							break;
						}
					}
				}

				/*
				html = '';
				var query = t.val();
				var querywords = query.split(',');
				*/

				/*
				for (var i in searchCache) {
					var term = searchCache[i];
					if (term === null) {
						continue;
					}

					for (var w in words) {
						var word = words[w];

						var regex = new RegExp(word,'i');
						if (term.title.search(regex) > -1) {
							if (typeof(cache[term.url]) == 'boolean') {
								continue;
							}

							console.log(word);

							cache[term.url] = true;
							html += '<a href="' + term.url + '">' + term.title + '<p>in ' + term.in + '</p></a>';
							cnt++;
							if (cnt >= limit) {
								break;
							}
						}
					}
				}
				*/
			}
			else {

				if (!current) {
					current = el.find('a:first');
				}
				switch (e.keyCode) {
					case 38:
						el.find('a.focus').removeClass('focus');
						current.prev().addClass('focus');
						current = current.prev();
						return;
						break;
					case 40:
						el.find('a.focus').removeClass('focus');
						console.log(current);
						current.next().addClass('focus');
						current = current.next();
						return;
						break;
					case 13:
						window.location.href = current.attr('href');
						return;
						break;
				}
			}

			if (cnt >= 1 && t.val()) {
				el.html('<a href="#" class="blank"></a>' + html).show();
			}
			else {
				current = null;
				el.html('').hide();
			}
		});

		control.parent('form:first').submit(function() {
			return false;
		});
	}
};

$(document).ready(function() {
	var t = $('.pf-search');
	if (!t.length) {
		return;
	}
	PF_Search({
		listen: t,
		id: t.data('output')
	});
});