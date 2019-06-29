$(document).ready(function(){
	var wordLent = 60,
	lent; // Maximum word length
	$('#project_title').keydown(function(event) {	
		lent = $('#project_title').val();
		if (lent.length >= wordLent) { 
			if ( event.keyCode == 46 || event.keyCode == 8 ) {// Allow backspace and delete buttons
	    } else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
	    	event.preventDefault();
	    }
		}
		
		wordsLeftt = (wordLent) - lent.length;
		$('.words-leftt').html(wordsLeftt+ ' characters left');
		
	});
	var wordLend = 200,
	lend; // Maximum word length
	$('#project_des').keydown(function(event) {	
		lend = $('#project_des').val();
		if (lend.length >= wordLend) { 
			if ( event.keyCode == 46 || event.keyCode == 8 ) {// Allow backspace and delete buttons
	    } else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
	    	event.preventDefault();
	    }
		}
		
		wordsLeftd = (wordLend) - lend.length;
		$('.words-leftd').html(wordsLeftd+ ' characters left');
		
	});
	var wordLens = 135,
	lens; // Maximum word length
	$('#short_blurb').keydown(function(event) {	
		lens = $('#short_blurb').val();
		if (lens.length >= wordLens) { 
			if ( event.keyCode == 46 || event.keyCode == 8 ) {// Allow backspace and delete buttons
	    } else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
	    	event.preventDefault();
	    }
		}
		
		wordsLefts = (wordLens) - len.length;
		$('.words-lefts').html(wordsLefts+ ' characters left');
		
	});
	function readURL(input) {
if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
        $('#imagePreview').css('background-image', 'url('+e.target.result +')');
        $('.avatar-preview').show();
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
}
}
$("#imageUpload").change(function() {
readURL(this);
});
});