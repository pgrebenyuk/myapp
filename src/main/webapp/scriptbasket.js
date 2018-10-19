$(function() {
    var paramValue = window.location.search.split('items=')[1];
    paramValue = paramValue.split(",");
    for (var i = 0; i < paramValue.length; i++){
        $('#basket').append('<p>' + paramValue[i] + '</p>');
    };

    $("#basketButton").click(function() {
        $.post("http://localhost:8080/myapp/buyService")
        .then(function(data, textStatus, jqHXR){
            if(jqHXR.status == 201){
                var url = "http://localhost:8080/myapp/shop/success";
                $(location).attr('href',url);
            }else {
                console.log(jqHXR.status);
            }
        })
        .fail(function(){
            console.log('error:');
        })
    })
})

