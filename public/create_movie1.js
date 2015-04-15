$(document).ready(function () {
    $('#createMovie1Btn').click( function(){
        var payload = {
            Title: $('#Title').val()
        };

        $.ajax({
            url: $("#create_movie1_form").attr("action"),
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