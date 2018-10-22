define('moduleshop',['jquery'], function ($) {
    $(function() {
        $('#result').load('http://localhost:8080/myapp/shop/items #items')
    });

})