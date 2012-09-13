describe('human-date', function(){
	beforeEach(function(){
		this.html = $('<div id="element"></div>');
	});
	
	describe('html', function(){
		beforeEach(function(){
			this.date = new Date();
			this.year = this.date.getFullYear();
			this.month = this.date.getMonth();
			this.day = this.date.getDate();
		});

		describe('date in the past', function(){
			it('should retorn string "1 ano atrás"', function(){
				var year = (this.year - 1);
				specHumanDate.verifyDateFormat(year, this.month, this.day, 'ptBr', this.html, '1 ano atrás');
			});

			it('should retorn string "1 mês atrás"', function(){
				var month = this.month - 1;			
				specHumanDate.verifyDateFormat(this.year, month, this.day, 'ptBr', this.html, '1 mês atrás');
			});

			it('should retorn string "1 dia atrás"', function(){
				var day = this.day - 1;			
				specHumanDate.verifyDateFormat(this.year, this.month, day, 'ptBr', this.html, '1 dia atrás');
			});

			it('should retorn string "2 anos atrás"', function(){
				var year = this.year - 2;
				specHumanDate.verifyDateFormat(year, this.month, this.day, 'ptBr', this.html, '2 anos atrás');
			});

			it('should retorn string "2 meses atrás"', function(){
				var month = this.month - 2;			
				specHumanDate.verifyDateFormat(this.year, month, this.day, 'ptBr', this.html, '2 meses atrás');
			});

			it('should retorn string "2 dias atrás"', function(){
				var day = this.day - 2;			
				specHumanDate.verifyDateFormat(this.year, this.month, day, 'ptBr', this.html, '2 dias atrás');
			});

			it('should retorn string "1 ano e 1 mês atrás"', function(){
				var month = this.month - 1;
				var year = this.year - 1;

				specHumanDate.verifyDateFormat(year, month, this.day, 'ptBr', this.html, '1 ano e 1 mês atrás');
			});

			it('should retorn string "1 ano e 1 dia atrás"', function(){
				var day = this.day - 1;
				var year = this.year - 1;

				specHumanDate.verifyDateFormat(year, this.month, day, 'ptBr', this.html, '1 ano e 1 dia atrás');
			});

			it('should retorn string "1 mês e 1 dia"', function(){
				var month = this.month - 1;
				var day = this.day - 1;

				specHumanDate.verifyDateFormat(this.year, month, day, 'ptBr', this.html, '1 mês e 1 dia atrás');
			});

			it('should retorn string "1 ano e 1 mês atrás"', function(){
				var day = this.day - 1;
				var month = this.month - 1;
				var year = this.year - 1;

				specHumanDate.verifyDateFormat(year, month, day, 'ptBr', this.html, '1 ano e 1 mês atrás');
			});

			it('should retorn string "1 ano e 1 mês atrás"', function(){
				specHumanDate.verifyDateFormat(this.year, this.month, this.day, 'ptBr', this.html, 'Agora');
			});
		});
	});
});