(function($) {

	$.fn.glitch = function(options) {

		var settings = $.extend({
			layers: ["red", "green"],
			offset: [10, 0],
		}, options);

		var content = $(this).html();

		$(this).html("");

		for (var i = 0; i < settings.layers.length; ++i) {
			$(this).append("<div class='layer' style='color:"+settings.layers[i]+";'>" + content + "</div>");
		}
		
		$(this).append("<div class='display'>" + content + "</div>");

		var self = this;

		var startTime = new Date().getTime();

		this.render = function() {
			var time = new Date().getTime() - startTime;

			var visibility = Math.sin(time / 1) > .8;

			self.find(".layer").each(function() {
				var offset = [
					visibility * ((Math.random() * 2 - 1) * settings.offset[0]),
					visibility * ((Math.random() * 2 - 1) * settings.offset[1]),
				];
				$(this)
					.css("top", offset[1] + "px")
					.css("left", offset[0] + "px")
					.css("opacity", .5 + (visibility) * .5);
			});

			self.find(".display").css("opacity", .75 + (!visibility) * .25);

			window.setTimeout(self.render, 100);
		};

		window.setTimeout(this.render, 0);

	};

}($));

$(document).ready(function ($) {
	$(".glitch").glitch({
		layers: ["blue", "green"],
		offset: [20, 10],
	});
});