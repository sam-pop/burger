$(function () {
    //'Eat it' button
    $('.eatItBtn').on('click', function (event) {
        let id = $(this).data('id');
        $.ajax('/api/burgers/' + id, {
            type: 'PUT'
        }).then(
            function () {
                location.reload();
            }
        );
    });

}); //END OF $