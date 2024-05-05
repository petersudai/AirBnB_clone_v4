$(document).ready(function() {
    // Function to check API status
    function checkAPIStatus() {
        $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
            if (data.status === 'OK') {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        });
    }

    // Call the function initially
    checkAPIStatus();

    // Set interval to check API status every 5 seconds
    setInterval(checkAPIStatus, 5000);
});
