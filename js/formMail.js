$("#sendMail").on("click", function() {
    
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();

    if(email == "") {
        $("#errorMess").text("введите email");
        return false;

    } else if(name == "") {
        $("#errorMess").text("введите имя");
        return false;

    } else if(phone == "") {
        $("#errorMess").text("введите phone");
        return false;
    } else if(message.length < 5) {
        $("#errorMess").text("введите message не менее 5 символов");
        return false;
    }

    $("#errorMess").text("");

    // шаг следующий
    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {'email': email, 'name': name, 'phone': phone, 'message': message},
        dataType: 'html',

        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },

        success: function(data) {
            if (data == false) {
                alert("Были ошибки, сообщение не отправлено!!");
            } else {

                $("#mailForm").trigger("reset");

                $("#sendMail").prop("disabled", false);

            }

             

        }

    });

});

