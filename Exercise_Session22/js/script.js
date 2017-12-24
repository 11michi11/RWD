$("#exampleButtonId").on("click", function() {
    var attributeContent = $("#imageId").attr("src");
    $(this).text(attributeContent);
});

$("#fontSizeChangeButtonId").on("click", function () {
    $("h2").css("font-size", "40px");
});

$("#textButtonId").click(function () {
   $("#textButtonId").html("Text changed");
});

$("#imageId").click(function () {
    if ($("#imageId").attr("src").match("images/sad.jpg"))
        $("#imageId").attr("src", "images/glad.jpg")
    else
        $("#imageId").attr("src", "images/sad.jpg")

});

$("u").click(function () {
    if ($("u").text().match("NOT"))
        $("u").text("NEVER");
    else
        $("u").text("NOT");
});

$("li").click(function () {
    $("#spanFieldId").text($(this).attr("value"));
});

$("#textFieldId").on("blur", function () {
    console.log($("#textFieldId").val());
})