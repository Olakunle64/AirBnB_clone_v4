$(document).ready(function () {
  $.get('http://127.0.0.1:5001/api/v1/status/', function (data, status) {
	  if (status === "success" && data.status === 'OK') {
		  $('div#api_status').addClass("available");
	  } else {
		  $('div#api_status').removeClass("available");
	  }
  });
});

$(document).ready(function () {
    $.ajax({
        url: ' http://127.0.0.1:5001/api/v1/places_search',
        type: 'POST',
        data: JSON.stringify({}),
        contentType: 'application/json',
        success: function(response) {
            for (let place of response){
                let article = $("<article></article>");
                let title_box = $("<div></div>").addClass("title_box");
                let place_name = $("<h2></h2>").text(place.name);
                let price_by_nig = $("<div></div>").addClass("price_by_night").text("$" + place.price_by_night);
                let info = $("<div></div>").addClass("information");
                let max_guest = $("<div></div>").addClass("max_guest").text(place.max_guest + " Guest" + (place.max_guest !== 1 ? "s" : ""));
                let number_rooms = $("<div></div>").addClass("number_rooms").text(place.number_rooms + " Bedroom" + (place.number_rooms !== 1 ? "s" : ""));
                let number_bathrooms = $("<div></div>").addClass("number_bathrooms").text(place.number_bathrooms + " Bathroom" + (place.number_bathrooms !== 1 ? "s" : ""));
                let user;
                if (place.user) {
                    let userFullName = place.user.first_name + " " + place.user.last_name;
                    user = $("<div></div>").addClass("user").html("<b>Owner:</b> " + userFullName);
                } else {
                    user = $("<div></div>").addClass("user").html("<b>Owner:</b>");
                }
                let description = $("<div></div>").addClass("description").html(place.description);
                article.append(title_box, info, user, description);
                title_box.append(place_name, price_by_nig);
                info.append(max_guest, number_rooms, number_bathrooms);
                $("section.places").append(article);
            }
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
        }
    });
});
