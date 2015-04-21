$(document).ready(function () {
    $('#createRating1Btn').click( function(){
        var payload = {
            MovieID: $('#movie1_id').val(),
            UserID: $('#UserID').val(),
            Rating: $('#Rating').val()
        };

        $.ajax({
            url: $("#create_rating1_form").attr("action"),
            type: "POST",
            contentType: "application/json",
            processData: false,
            data: JSON.stringify(payload),
            complete: function(data) {
                console.log(data.responseText);
                $('#output').html(data.responseText);
                $('#output').show();
            }
        });
    });
});