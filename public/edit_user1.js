$(document).ready(function () {
    $('#editUser1Btn').click( function(){
        var payload = {
            UserID: $('#UserID').val(),
            Username: $('#Username').val(),
            Firstname: $('#Firstname').val(),
            Lastname: $('#Lastname').val()
        };

        $.ajax({
            url: $("#edit_user1_form").attr("action"),
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