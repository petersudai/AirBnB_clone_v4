$(document).ready(function() {
    // Variable to store checked amenities
    var checkedAmenities = [];

    // Listen for changes on each checkbox tag
    $('input[type="checkbox"]').change(function() {
        var amenityID = $(this).data('id');
        var amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            // Add Amenity ID to the list of checked amenities
            checkedAmenities.push(amenityID);
        } else {
            // Remove Amenity ID from the list of checked amenities
            checkedAmenities = checkedAmenities.filter(id => id !== amenityID);
        }

        // Update the h4 tag with the list of checked amenities
        $('#checked_amenities').text('Checked Amenities: ' + checkedAmenities.join(', '));
    });
});
