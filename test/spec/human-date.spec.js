describe('human-date', function(){
	beforeEach(function(){
		this.html = $('<div id="element"></div>');
	});

	describe('instantiates', function(){
		beforeEach(function(){
			this.fn = $.fn.humanDate;
		});
		
		it('should exist function humanDate in the object $.fn', function(){
			expect(typeof(this.fn)).toEqual('function');
		});
		
		it('should exist object defaults in the $.fn.humanDate', function(){
			expect(typeof(this.fn.defaults)).toEqual('object');
		});
		
		it('should exist property date of type object in the $.fn.humanDate.defaults', function(){
			expect(typeof(this.fn.defaults.date)).toEqual('object');
		});
		
		it('should exist property idiom with value "enUs" in the $.fn.humanDate.defaults', function(){
			expect(this.fn.defaults.idiom).toEqual('enUs');
		});
	});
	
	describe('html', function(){
		beforeEach(function(){
			this.date = new Date();
			this.year = this.date.getFullYear();
			this.month = this.date.getMonth();
			this.day = this.date.getDate();
		});

		describe('date in the past', function(){
			it('should retorn string "1 year ago"', function(){
				var year = (this.year - 1);
				specHumanDate.verifyDateFormat(year, this.month, this.day, 'enUs', this.html, '1 year ago');
			});

			it('should retorn string "1 month ago"', function(){
				var month = this.month - 1;			
				specHumanDate.verifyDateFormat(this.year, month, this.day, 'enUs', this.html, '1 month ago');
			});
			
			it('should retorn string "1 day ago"', function(){
				var day = this.day - 1;			
				specHumanDate.verifyDateFormat(this.year, this.month, day, 'enUs', this.html, '1 day ago');
			});
			
			it('should retorn string "2 years ago"', function(){
				var year = this.year - 2;
				specHumanDate.verifyDateFormat(year, this.month, this.day, 'enUs', this.html, '2 years ago');
			});
			
			it('should retorn string "2 months ago"', function(){
				var month = this.month - 2;			
				specHumanDate.verifyDateFormat(this.year, month, this.day, 'enUs', this.html, '2 months ago');
			});
			
			it('should retorn string "2 days ago"', function(){
				var day = this.day - 2;			
				specHumanDate.verifyDateFormat(this.year, this.month, day, 'enUs', this.html, '2 days ago');
			});
			
			it('should retorn string "1 year and 1 month ago"', function(){
				var month = this.month - 1;
				var year = this.year - 1;
			
				specHumanDate.verifyDateFormat(year, month, this.day, 'enUs', this.html, '1 year and 1 month ago');
			});
			
			it('should retorn string "1 year and 1 day ago"', function(){
				var day = this.day - 1;
				var year = this.year - 1;
			
				specHumanDate.verifyDateFormat(year, this.month, day, 'enUs', this.html, '1 year and 1 day ago');
			});
			
			it('should retorn string "1 month and 1 day ago"', function(){
				var month = this.month - 1;
				var day = this.day - 1;
			
				specHumanDate.verifyDateFormat(this.year, month, day, 'enUs', this.html, '1 month and 1 day ago');
			});
			
			it('should retorn string "1 year and 1 month ago"', function(){
				var day = this.day - 1;
				var month = this.month - 1;
				var year = this.year - 1;
			
				specHumanDate.verifyDateFormat(year, month, day, 'enUs', this.html, '1 year and 1 month ago');
			});
			
			it('should retorn string "Now"', function(){
				specHumanDate.verifyDateFormat(this.year, this.month, this.day, 'enUs', this.html, 'Now');
			});
		});
	});
});