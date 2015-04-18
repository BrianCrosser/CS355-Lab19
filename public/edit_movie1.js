$(document).ready(function () {
    $('#editMovie1Btn').click( function(){
        var payload = {
            MovieID: $('#MovieID').val(),
            Title: $('#Title').val()
        };

        $.ajax({
            url: $("#edit_movie1_form").attr("action"),
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