var document;
var listItemArray = document.getElementsByTagName("li");

listItemArray[0].innerHTML = listItemArray[0].innerHTML + " " + add_two_numbers(5, 7);
listItemArray[1].innerHTML = listItemArray[1].innerHTML + " " + multiplyThreeNumber(5, 7, 6);
listItemArray[2].innerHTML = listItemArray[2].innerHTML + " " + circle(5);
listItemArray[3].innerHTML = listItemArray[3].innerHTML + " " + randomVal();
listItemArray[4].innerHTML = listItemArray[4].innerHTML + " " + date();
listItemArray[5].innerHTML = listItemArray[5].innerHTML + " " + oddEven(date());
var counter1 = document.getElementById("counter1Id");
var counter2 = document.getElementById("counter2Id");
var c1 = 0,
    c2 = 0;
counter(0, 1000, counter1);
counter(0, 2000, counter2);


//Write your function declarations below this line
function add_two_numbers(n1, n2) {
    return n1 + n2;
}

function multiplyThreeNumber(n1, n2, n3) {
    return n1 * n2 * n3;
}

function circle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function randomVal(params) {
    colors = ['red', 'blue', 'green', 'black', 'white'];
    return colors[Math.floor(Math.random() * 5)];
}

function date() {
    var date = new Date();
    var dateOld = new Date(2015, 0, 1);
    return date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + Math.floor((date - dateOld) / (1000 * 60 * 60 * 24));
}

function oddEven(number) {
    number = number.split(" ")[1];
    if (number % 2 == 0)
        return 'Even';
    else
        return 'Odd';
}

function counter(value, timeInterval, elem) {
    if (value < 10) {
        value++;
        elem.innerHTML = value;
        setTimeout(function () {
            counter(value, timeInterval, elem)
        }, timeInterval);
    }
}