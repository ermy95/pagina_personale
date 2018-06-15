$("#quadrato").on("click", function() {
    if($(this).hasClass("top-left")) {
        $(this).removeClass("top-left").addClass("top-right")
    } else if ($(this).hasClass("top-right")) {
        $(this).removeClass("top-right").addClass("bottom-right")
    } else if ($(this).hasClass("bottom-right")) {
        $(this).removeClass("bottom-right").addClass("bottom-left")
    } else if ($(this).hasClass("bottom-left")) {
        $(this).removeClass("bottom-left").addClass("top-left")
    }
})
