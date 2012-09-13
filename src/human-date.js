(function($, window){
	'use strict';
	
	var HumanDate = {};

	HumanDate.init = function(element, options){
		this.options = $.extend({}, $.fn.humanDate.defaults, options);
		this.element = element;
		this.vocabulary = $.fn.humanDate.vocabulary[this.options.idiom];

		this.getDateNow();
		this.getDateParameter();

		this.element.html(this.formatDate());
	};

	HumanDate.getVocabulary = function(){
		if(this.options.idiom in $.fn.humanDate.vocabulary){
			this.vocabulary = $.fn.humanDate.vocabulary[this.options.idiom];
		}else{
			throw('Idiom invalid!');
		}
	};

	HumanDate.getDateNow = function(){
		var dateNow = new Date();

		this.yearNow = dateNow.getFullYear();
		this.monthNow = dateNow.getMonth();
		this.dayNow = dateNow.getDate();
	};

	HumanDate.getDateParameter = function(){
		var dateParameter = new Date(this.options.date);

		this.yearParameter = dateParameter.getFullYear();
		this.monthParameter = dateParameter.getMonth();
		this.dayParameter = dateParameter.getDate();
	};

	HumanDate.getPluralOrSingular = function(value, diff){
		var hasPlural = diff > 1;
		var response = diff + ' ' + this.vocabulary[hasPlural ? value+'s' : value];

		return response;
	};

	HumanDate.getYear = function(yearDiff){
		var hasYear = yearDiff > 0;
		var response = '';

		if(hasYear){
			response = this.getPluralOrSingular('year', yearDiff);
		}

		return response;
	};

	HumanDate.getMonth = function(monthDiff, yearDiff){
		var hasMonth = monthDiff > 0;
		var hasYear = yearDiff > 0;
		var response = '';

		if(hasMonth){
			if(yearDiff > 0){
				response += ' ' + this.vocabulary.and + ' ';
			}

			response += this.getPluralOrSingular('month', monthDiff);
		}

		return response;
	};

	HumanDate.getDay = function(dayDiff, monthDiff, yearDiff){
		var hasMonth = monthDiff > 0;
		var hasYear = yearDiff > 0;
		var hasDay = dayDiff > 0 && !(hasYear && hasMonth);
		var response = '';

		if(hasDay){
			if(hasYear || hasMonth){
				response += ' ' + this.vocabulary.and + ' ';
			}

			response += this.getPluralOrSingular('day', dayDiff);
		}

		return response;
	};
	
	HumanDate.getToday = function(yearDiff, monthDiff, dayDiff){
		var isToday = (yearDiff === 0 && monthDiff === 0 && dayDiff === 0);
		var response = '';

		if(isToday){
			response = this.vocabulary.now;
		}

		return response;
	};

	HumanDate.formatDate = function(){
		var yearDiff = (this.yearNow - this.yearParameter);
		var hasYear = yearDiff > 0;
		var monthDiff = (this.monthNow - this.monthParameter);
		var hasMonth = monthDiff > 0;
		var dayDiff = (this.dayNow - this.dayParameter);
		var hasDay = dayDiff > 0 && !(hasYear && hasMonth);
		var response = this.getToday(yearDiff, monthDiff, dayDiff);

		if(!response){
			response += this.getYear(yearDiff);
			response += this.getMonth(monthDiff, yearDiff);
			response += this.getDay(dayDiff, monthDiff, yearDiff);
			response += ' ' + this.vocabulary.ago;
		}

		return response;
	};

	$.fn.humanDate = function(options){
		return this.each(function(){
			HumanDate.init($(this), options);
		});
	};

	$.fn.humanDate.defaults = {
		date: new Date(),
		idiom: 'enUs'
	};

	$.fn.humanDate.vocabulary = {};

	$.fn.humanDate.vocabulary.enUs = {
		'year': 'year',
		'years': 'years',
		'month': 'month',
		'months': 'months',
		'and': 'and',
		'day': 'day',
		'days': 'days',
		'ago': 'ago',
		'now': 'Now'
	};
}(jQuery, window));