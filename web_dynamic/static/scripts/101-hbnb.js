$(document).ready(function() {
    $('#toggle_reviews').click(function() {
        if ($(this).text() === 'show') {
            fetchReviews();
            $(this).text('hide');
        } else {
            $('#reviews_list').empty();
            $(this).text('show');
        }
    });

    function fetchReviews() {
        $.ajax({
            type: 'GET',
            url: 'http://0.0.0.0:5001/api/v1/reviews/',
            success: function(response) {
                response.forEach(function(review) {
                    $('#reviews_list').append('<li>' + review.text + '</li>');
                });
            }
        });
    }
});
