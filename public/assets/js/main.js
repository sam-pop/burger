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

    $(".addBurger").on("submit", function (event) {
        event.preventDefault();

        var burgerToAdd = {
            name: $("#burgerName").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerToAdd
        }).then(
            function () {
                $("#burgerName").val('');
                location.reload();
            }
        );
    });
}); //END OF $