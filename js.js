var clicks = 0;
var clickValue = 1;
var nbr = document.getElementById("nbrClick");
var plusClick = document.getElementById("clickerBtn");
var amelioration = document.getElementById("amelioration");

amelioration.onclick = function () {

    clickValue = clickValue * 2;
    console.log("amelioration * 2")

};

plusClick.onclick = function () {

    clicks = clicks + clickValue;
    nbr.innerHTML = clicks;

}

