function getQuote(){
	$.ajax( {
		url: 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?&jsoncallback=?',
		dataType: 'jsonp',
		success: function(data) {
			var post = data;
	        $('#quote').html('"'+post.quoteText+'"');

	        if(post.quoteAuthor!=""){
	        	$('#author').text('- '+post.quoteAuthor);
	        } else {
	        	$('#author').text('- Unknown');
	        }

	        $('#tweetLink').attr('href','https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + post.quoteText)
	    },
	    cache: false
	});
}

$(document).ready(getQuote);
$(document).ready(function(){
	$('#quoteBtn').on('click', getQuote);
});
