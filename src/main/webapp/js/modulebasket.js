define('modulebasket',['jquery'], function ($) {
    $(function() {
        var paramValue = window.location.search.split('items=')[1] || "";
        paramValue = paramValue.split(",");
        for (var i = 0; i < paramValue.length; i++) {
            $('#basket').append('<p>' + paramValue[i] + '</p>')
        }
    })
})