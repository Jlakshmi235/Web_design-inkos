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

/* Functions for Volunteer Help Page */
	$("#emptySearchAlert").hide();
 	var names = ['ABC Corporation', 'Miles Guerrera', 'XYZ Corp. Social Outreach', 'RoofsForAll (NGO)', 'Saviour Hurricane Relief Trust', 'XYZ Corp.', 'Red Cross of America', 'XYZ Corp. Social Outreach', 'Martha Lewis Charity', 'Chicago Storm Relief Group', 'JKL Corp. Social Outreach', 'Red Cross of America', 'Martha Lewis Charity', 'Carson Building Administration'];
 	var address = ['2000 Sheridan Road', '1717 Hinman Ave.', '2134 Clark Ave.', '1254 Madison St.', '245 Sierra Ave.', '1002 Main St.', '2030 University Pl.', '2004 Pelican Ave.', '1243 Lark Rd.', '2134 Harriot St.', '245 Carlson Bld.', '123 Baker Ave.', '809 Morrison Bld.', '2113 Clark St.'];
 	var miles = ['0.2 miles', '0.3 miles', '0.3 miles', '0.3 miles', '0.3 miles', '0.5 miles', '0.6 miles', '1.2 miles','1.7 miles', '3.0 miles', '3.7 miles', '4.0 miles', '4.3 miles', '5.0 miles', '5.0 miles']
 	var email = ['outreach@abc.com', 'mguerrera@gmail.com', 'outreach@xyz.com', 'contactus@roofsforall.org', 'shrf@gmail.com', 'outreach@xyz.com', 'contact@redcross.org', 'outreach@xyz.com', 'marthacharity@gmail.com', 'stormrelief@gmail.com', 'outreach@jkl.com', 'contact@redcross.com', 'marthacharity@gmail.com', 'carsonbuilding@gmail.com'];
 	var mobile = '222-777-9999';
 	var dates = ['10/22/2017', '10/22/2017', '10/22/2017', '10/22/2017', '10/22/2017', '10/23/2017', '10/23/2017', '10/23/2017', '10/24/2017', '10/24/2017', '10/25/2017', '10/25/2017', '10/25/2017', '10/25/2017'];
 	var times = ['3:00PM - 7:00PM', '2:00PM - 3:00PM', '4:00PM - 6:00PM', '2:00PM - 3:00PM', '4:00PM - 6:00PM', '12:00PM - 3:00PM', '6:00PM - 9:00PM', '5:00PM - 10:00PM', '11:00AM - 3:00PM', '4:00PM - 7:00PM', '6:00PM - 9:00PM', '11:00AM - 4:00PM', '12:00PM - 2:00PM', '4:00PM - 6:00PM'];
 	var timefrom = ['3:00PM', '2:00PM', '4:00PM', '2:00PM', '4:00PM', '12:00PM', '6:00PM', '5:00PM', '11:00AM', '4:00PM', '6:00PM', '11:00AM', '12:00PM', '4:00PM'];
 	var timeto = ['7:00PM', '3:00PM', '6:00PM', '3:00PM', '6:00PM', '3:00PM', '9:00PM', '10:00PM', '3:00PM', '7:00PM', '9:00PM', '4:00PM', '2:00PM', '6:00PM'];
 	var miles = ['0.2 Miles', '0.3 Miles', '0.3 Miles', '0.3 Miles', '0.5 Miles', '0.6 Miles', '1.2 Miles', '1.7 Miles', '3.0 Miles', '3.7 Miles', '4.0 Miles', '4.3 Miles', '5.0 Miles', '5.0 Miles']
 	var descs = ['ABC organization is distributing 1000 disaster relief kits for people affected. Volunteers needed', 'Lend your support to families affected in ...', 'XYZ Corp. is giving out free meals to individuals in need.', 'Volunteer your house as shelter for individuals/families who have lost their homes.', 'Lend your support (financial,emotional) to families and individuals affected in storm.', 'XYZ corporation is distributing 1500 disaster survival kits for people affected. Volunteers needed', 'Lend your support to families affected in ...', 'XYZ corp. is giving out free meals to families and individuals in need. Donations welcome.', 'Volunteer your house as shelter for individuals/families who had their houses destroyed.', 'Lend your support (financial, emotional, shelter) to families and individuals affected in storm.', 'JKL Corp. has pledged the distribution of 500 free meals. Volunteers required.', 'Red Cross is putting together school kits to be distributed amongst children below 14 years.', 'Lend your support to families affected in ....', 'Volunteer to shelter individuals/families who have lost their homes.'];

	$('#vol-table').on('click-row.bs.table', function (e, row, $element) {
		/*Setting background color for table row */
  	$('.success').removeClass('success');
  	$($element).addClass('success');
});

$("#search-button").click(function(){
/*Moving search bar/ checking for input*/
    var input = $('#searchbar').val().trim();
    if(input == ""){
      $('#emptySearchAlert').show();
      $('#searchbar').css("background-color", "LemonChiffon");
      return false;
    } 
    else{
    $('#searchbar').removeAttr("style");
    $('#emptySearchAlert').hide();
    $("#pad-div").slideUp(1000);
    $("#table-div").show(1000);
    return false;
  }
    });


$("#vol-table tbody > tr").click(function() {
/*Setting request info fields and showing divs on modal open (table row click)*/
    $("body").addClass("stop-scrolling");
    $("#modalHead").html("Your help is needed "+miles[$(this).data('id')]+" away!");
    current_row = $(this)
    $("#name").html(names[$(this).data('id')]);      
    $("#description").html(descs[$(this).data('id')]);
    $("#times").html(times[$(this).data('id')]);
    $("#date").html(dates[$(this).data('id')]);
    $("#email").html(email[$(this).data('id')]);
    $("#mobile").html(mobile);
    $("#address").html(address[$(this).data('id')]);
    var selected = $(this).hasClass("highlight");
    $("#vol-table tr").removeClass("highlight");
    if(!selected)
            $(this).addClass("highlight");

});


// $("#form-modal").on('shown.bs.modal', function(e){
//       $("body").addClass(".stop-scrolling");
// });

$("#form-modal").on('hidden.bs.modal', function(e){
/* Hiding divs and resetting forms in modal close */
  $("body").removeClass("stop-scrolling");
  current_row.removeClass("highlight");
  $("#info-form").slideDown()
  $("#user-entry").addClass("hide")
  $('#emptyFieldAlert').hide();
  $('#submitSuccessAlert').hide();
  $('#user-entry').trigger("reset");
  $("#modal-header-title").text("Requester Information");
});

$(document).on("click", "#volunteer-button", function(event){
/*Function to show volunteer info form in modal */
    $("#info-form").slideUp();
    $("#user-entry").removeClass("hide");
    $("#modal-header-title").text("Volunteer Information");
});



$(document).on("click", "#submitVolButton", function(event){
/* Function for Volunteer info fields check*/
    var name = $('#nameInput').val().trim();
    var phone = $('#phoneInput').val().trim();
    var email = $('#emailInput').val().trim();
    $('.requiredInput').removeAttr("style");
    if (name != "" && phone != "" && email != ""){
      $('#emptyFieldAlert').hide();
      $('#submitSuccessAlert').show();
      $('#user-entry').trigger("reset");
    }
    else{
      $('#emptyFieldAlert').show();
      if (name == ""){
        $('#nameInput').css("background-color", "LemonChiffon");
      }
      if (phone == ""){
        $('#phoneInput').css("background-color", "LemonChiffon");
      }
      if (email == ""){
        $('#emailInput').css("background-color", "LemonChiffon");
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