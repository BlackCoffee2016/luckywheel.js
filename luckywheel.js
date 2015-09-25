(function($) {
	$.fn.luckywheel = function(options, callback) {
		var defaults = {
				activeClass: "luckywheelactive",
				highSpeed: 2,
				lowSpeed: 3,
				wheelNumber: 3,
				wheelResult: 0
		}
		var opts = $.extend(defaults, options);
		var length = this.length;
		var $this = this;
		
		var activeNum = 0;
		var intervalNum = 0;
		
		var intervalId = setInterval(function() {

			if (activeNum < 4) {
				if (intervalNum % opts.lowSpeed == 0) {
					active();
					activeNum++;
					intervalNum = 0;
				}
			} else if (activeNum < opts.wheelNumber * length + opts.wheelResult - 4) {
				if (intervalNum % opts.highSpeed == 0) {
					active();
					activeNum++;
					intervalNum = 0;
				}
			} else if (activeNum < opts.wheelNumber * length + opts.wheelResult + 1) {
				if (intervalNum % opts.lowSpeed == 0) {
					active();
					activeNum++;
					intervalNum = 0;
				}
			} else {
				stopInterval();
				if(callback) {
					callback();
				}
			}
			
			intervalNum++;
		}, 100);
		
		function active() {
			$this.removeClass(opts.activeClass);
			$this.eq(activeNum % length).addClass(opts.activeClass);
		}
		
		function stopInterval() {
			clearInterval(intervalId);
		}
		
		return this;
	}
})(jQuery);