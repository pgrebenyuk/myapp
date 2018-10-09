$(function() {
    var count = 0;
    $('#result').load('http://localhost:8080/myapp/shop/items #items');
    $('#container').load('http://localhost:8080/myapp/shop/basket');
    $('#result').on('click',':checkbox', function() {
        var id = this.id;

        if (this.checked) {
            var name = this.labels[0].textContent;
            count++;
            $('#basket').append('<p id=' + id + '>' + name + '</p>');
        } else {
            var elem = '#basket #'+id;
            count--;
            $(elem).remove();
        }
        if (count > 0) {
            $('#aside').show();
        } else {
            $('#aside').hide();
        }
    })
    $("#basketButton").click(function() {
        var serializedData = $('#basket p').serialize();
        $.ajax({
            type : "POST",
            url : "/myapp/buyService",
            data : serializedData,
            contentType: "charset=UTF-8",
            success: function (response) {
                console.log("Success", + response.statusCode);
            },
            statusCode: {
                201: function() {
                    var url = "/myapp/shop/success";
                    $(location).attr('href',url);
                }
            },
            error: function (e) {
                console.log("Server error - " + e);
            }
        });
    });
})
