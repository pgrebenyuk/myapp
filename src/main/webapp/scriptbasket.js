$(function() {
    var paramValue = window.location.search.split('items=')[1];
    paramValue = paramValue.split(",");
    for (var i = 0; i < paramValue.length; i++){
        $('#basket').append('<p>' + paramValue[i] + '</p>');
    };

    $("#basketButton").click(function() {
        var serializedData = $('#basket p').serialize();
        $.ajax({
            type : "POST",
            url : "http://localhost:8080/myapp/buyService",
            data : serializedData,
            contentType: "charset=UTF-8",
            success: function (response) {
                console.log("Success", + response.statusCode);
            },
            statusCode: {
                201: function() {
                    var url = "http://localhost:8080/myapp/shop/success";
                    $(location).attr('href',url);
                }
            },
            error: function (e) {
                console.log("Server error - " + e);
            }
        });
    });
})
