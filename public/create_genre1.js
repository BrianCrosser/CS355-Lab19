$(document).ready(function () {
    $('#createGenre1Btn').click( function(){
        var payload = {
            MovieID: $('#movie1_id').val(),
            Genre: $('#Genre').val()
        };

        $.ajax({
            url: $("#create_genre1_form").attr("action"),
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