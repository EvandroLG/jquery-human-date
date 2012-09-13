var specHumanDate = {};

specHumanDate.verifyDateFormat = function(year, month, day, idiom, html, resposta){
	if(year === null && month === null && day === null){
		html.humanDate();
	}else{
		var dateFormat = new Date(year, month, day);

		html.humanDate({
			date: dateFormat,
			idiom: idiom
		});
	}

	expect(html).toHaveText(resposta);
};