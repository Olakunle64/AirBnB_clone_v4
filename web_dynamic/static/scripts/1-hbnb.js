$(document).ready(function () {
	let amenity_ids = {};
	$(".amenities input[type='checkbox']").change(function () {
		let amenity_id = $(this).data("id");
		let amenity_name = $(this).data("name");
		if ($(this).is(":checked")) {
			if (amenity_ids[amenity_id] === undefined) {
				amenity_ids[amenity_id] = amenity_name;
			}
		} else {
			delete amenity_ids[amenity_id];
		}
		let result = Object.values(amenity_ids).join(', ');
		$(".amenities h4").text(result);
	});
});
