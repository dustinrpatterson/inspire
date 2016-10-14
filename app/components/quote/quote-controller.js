(function(){
	function QuoteController(){
	//Get your QuoteService
	var quoteService = new QuoteService();

	//Calling function to update quote
	quoteService.getQuote(updateQuote)

	// function to update DOM for quote
	function updateQuote(data){
		var results = JSON.parse(data)
		var quoteElem = $('#quote')
		var quoteTemplate = ''
		quoteTemplate += `
		<div class="quoteCard">
			<h2>"${results.quote}"</h2>
			<p>- ${results.author}</p>
		</div>
		`
		quoteElem.append(quoteTemplate);
	}

}

QuoteController()

}())
