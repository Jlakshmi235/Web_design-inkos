$(document).ready(function(){

/* Function for Landing Page */    
	var clickEvent = false;
	$('#myCarousel').carousel({
		interval:   4000	
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			$('.list-group li').removeClass('active');
			$(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-group li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});

/* Function for Request Help Page */
	$('.alert').hide();
	$('#submitButton').on('click', function() {
		var name = $('#nameInput').val().trim();
		var street = $('#streetInput').val().trim();
		var city = $('#cityInput').val().trim();
		var zip = $('#zipInput').val().trim();
		var phone = $('#phoneInput').val().trim();
		var email = $('#emailInput').val().trim();
		var date = $('#dateInput').val().trim();
		var fromtime = $('#fromTimeInput').val().trim();
		var totime = $('#toTimeInput').val().trim();
		$('.requiredInput').removeAttr("style");
		if (name != "" && street != "" && city != "" && zip != "" && phone != "" && email != "" && date != "" && fromtime != "" && totime != ""){
			$('#informationForm').trigger("reset");
			$('#emptyFieldAlert').hide();
			$('#submitSuccessAlert').show();
		}
		else{
			$('#emptyFieldAlert').show();
			if (name == ""){
				$('#nameInput').css("background-color", "LemonChiffon");
			}
			if (street == ""){
				$('#streetInput').css("background-color", "LemonChiffon");
			}
			if (city == ""){
				$('#cityInput').css("background-color", "LemonChiffon");
			}
			if (zip == ""){
				$('#zipInput').css("background-color", "LemonChiffon");
			}
			if (phone == ""){
				$('#phoneInput').css("background-color", "LemonChiffon");
			}
			if (email == ""){
				$('#emailInput').css("background-color", "LemonChiffon");
			}
			if (date == ""){
				$('#dateInput').css("background-color", "LemonChiffon");
			}
			if (fromtime == ""){
				$('#fromTimeInput').css("background-color", "LemonChiffon");
			}
			if (totime == ""){
				$('#toTimeInput').css("background-color", "LemonChiffon");
			}
		}
	});
});

$(window).load(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
	$('#myCarousel .list-group-item').outerHeight(triggerheight);
});