
$("#carousel-button").click(function(){
    if ($("#carousel-button").children("span").hasClass('fa-pause')) {
        $("#carousel").carousel('pause');
        $("#carousel-button").children("span").removeClass('fa-pause');
        $("#carousel-button").children("span").addClass('fa-play');
    }
    else if ($("#carousel-button").children("span").hasClass('fa-play')){
        $("#carousel").carousel('cycle');
        $("#carousel-button").children("span").removeClass('fa-play');
        $("#carousel-button").children("span").addClass('fa-pause');                    
    }
});

$("#loginBtn").click(function(){
    $("#loginModal").modal("show");
});

$("#reserveBtn").click(function(){
    $("#reserveModal").modal("show");
});