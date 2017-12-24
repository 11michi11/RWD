// Call to function
$("#orangeBoxId").animate({left: "+=200"},"slow",function() {squareMovement(this)});

// Declaration of function
function squareMovement(IdRef) {
    $(IdRef).delay(1000).animate({top: "+=100"}).delay(1000).animate({left: "+=100"}).delay(1000).animate({top: "-=100"}).delay(1000).animate({left: "-=100"}, function(){squareMovement(IdRef);});
}

$("#stopButtonId").click(function () {
    $("#orangeBoxId").stop(true);
})

$("#startButtonId").click(function () {
    $("#orangeBoxId").animate("slow",function() {squareMovement(this)});
});

$("#greenBoxId").mouseover(function () {
    var top = Math.floor(Math.random() * 80 + 20) * (Math.floor(Math.random() * 2) == 0 ? 1 : -1);
    var left = Math.floor(Math.random() * 80 + 20) * (Math.floor(Math.random() * 2) == 0 ? 1 : -1);

    var frameDistanceTop = $(window).height() - $("#greenBoxId");
    var frameDistanceLeft = $(window).width() - $("#greenBoxId");

    if(frameDistanceLeft - left < 0)
        left = -left;
    if(frameDistanceTop - top < 0)
        top = -top;

    $("#greenBoxId").animate({top: top, left: left});
})