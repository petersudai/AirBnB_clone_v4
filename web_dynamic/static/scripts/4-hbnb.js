$(document).ready(function() {
    $('#filter_btn').click(function() {
        var amenities = [];
        $('input[type="checkbox"]:checked').each(function() {
            amenities.push($(this).attr('data-id'));
        });
        
        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: amenities }),
            success: function(response) {
                $('section.places').empty();
                response.forEach(function(place) {
                    $('section.places').append(
                        '<article>' +
                            '<div class="title_box">' +
                                '<h2>' + place.name + '</h2>' +
                                '<div class="price_by_night">$' + place.price_by_night + '</div>' +
                            '</div>' +
                            '<div class="information">' +
                                '<div class="max_guest">' + place.max_guest + ' Guests</div>' +
                                '<div class="number_rooms">' + place.number_rooms + ' Rooms</div>' +
                                '<div class="number_bathrooms">' + place.number_bathrooms + ' Bathrooms</div>' +
                            '</div>' +
                            '<div class="user">' +
                                '<b>Owner:</b> ' + place.user.first_name + ' ' + place.user.last_name +
                            '</div>' +
                            '<div class="description">' + place.description + '</div>' +
                        '</article>'
                    );
                });
            }
        });
    });
});
