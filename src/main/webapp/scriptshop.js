$(function() {
    var count = 0;
    $('#result').load('http://localhost:8080/myapp/shop/items #items');
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
            $('#aside').show();
        } else {
            $('#aside').hide();
        }
    });
    $("#openBasket").click(function() {
        var items = $('#container p');
        var itemsString = '';
        var url = '/myapp/shop/basket?items=';
        items.each(function (index) {
            if (index == 0) {
                itemsString += $(this).text();
            } else {
                itemsString += ',' + $(this).text();
            }
            console.log(itemsString);
            $(location).attr('href', url + itemsString);
        });
        //$.ajax({
        //    url: 'http://localhost:8080/myapp/shop/basket',
        //    data: itemsString,
        //}).then(function (result) {
        //    console.log('result', result);
        //}).catch(function (err) {
        //    console.log('err', err)
        //})
    });
})