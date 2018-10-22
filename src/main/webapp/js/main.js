
require(['jquery','modyleshop'], function ($) {
    var count = 0;
    $('#result').on('click',':checkbox', function() {
        var id = this.id;

        if (this.checked) {
            var name = this.labels[0].textContent;
            count++;
            $('#container').append('<p id=' + id + '>' + name + '</p>');
        } else {
            var elem = '#container #'+id;
            count--;
            $(elem).remove();
        }
        if (count > 0) {
            $('#aside').show()
        } else {
            $('#aside').hide()
        }
    });
    $("#openBasket").click(function() {
        var items = $('#container p');
        var itemsString = '';
        var url = 'http://localhost:8080/myapp/shop/basket?items=';
        items.each(function (index) {
            if (index == 0) {
                itemsString += $(this).text()
            } else {
                itemsString += ',' + $(this).text()
            }
            console.log(itemsString);
            $(location).attr('href', url + itemsString);
        })
    })
});

require(['jquery','modylebasket'], function ($)  {
    $("#basketButton").click(function() {
        $.post("http://localhost:8080/myapp/buyService")
            .then(function(data, textStatus, jqHXR) {
                if (jqHXR.status == 201) {
                    var url = "http://localhost:8080/myapp/shop/success";
                    $(location).attr('href',url)
                } else {
                    console.log(jqHXR.status)
                }
            })
            .fail(function() {
                console.log('error:')
            })
    })
})
