
$(document).on('click', ".nav-button", function (e) {
    console.log("nav-button click");
    var list = document.getElementsByClassName("nav-button-active");
    for (var i=0; i<list.length; i++){
        list[i].classList.remove("nav-button-active");
    }
    $(this).addClass("nav-button-active");
});


