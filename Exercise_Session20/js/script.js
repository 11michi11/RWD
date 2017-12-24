var document;
var exampleLine = document.getElementById("exampleLineId");
exampleLine.innerHTML = "This is just an <u>example line</u> of how innerHTML works.";

var firstField = document.getElementById("firstFieldId");
firstField.innerHTML = "15";

var firstLineId = document.getElementById("firstLineId");
firstLineId.innerHTML = firstLineId.innerHTML + "18";

var array = ["Cat", "Dog", "Parrot"];
document.getElementById("secondLineId").innerHTML = array[0] + ' ' + array[1] + ' ' + array[2];

var list = document.getElementsByClassName("fruitClass");
list[0].innerHTML = "Apple";
list[1].innerHTML = "Banana";

var thirdLine = document.getElementById("thirdLineId");
thirdLine.innerHTML = "<u>" + thirdLine.innerHTML + "</u>";

var fourthLine = document.getElementById("fourthLineId");
var str = "<ul> <li> Car </li> <li> Dog </li> <li> Parrot </li> </ul>";
fourthLine.innerHTML = str;

function timer() {
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var time = hours + ":" + minutes + ":" + seconds;

    var day = today.getDate();
    var month = today.getMonth() + 1;
    var fullYear = today.getFullYear();
    var date = day + "/" + month + "/" + fullYear;

    document.getElementById("zegar").innerHTML = date + " | " + time;
    console.log(hours + ":" + minutes + ":" + seconds);
    setTimeout("timer()", 1000);
}