$(document).ready(function () {
    $(".word-wrapper").swipe({
        swipeUp: function (event, direction, distance, duration) {
            $(".word-wrapper").css("background-color", "red");
            console.log("You swiped " + direction)
        },
        swipeDown: function (event, direction, distance, duration) {
            $(".word-wrapper").css("background-color", "green");
            console.log("You swiped " + direction)
        },
        click: function (event, target) {
        },
        threshold: 100,
        allowPageScroll: "vertical"
    });
});
