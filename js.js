var clicks = 0;
var nbr = document.getElementById("nbrClick");
var plusClick = document.getElementById("clickerBtn");
var amelioration = document.getElementById("amelioration")

amelioration.onclick = function () {

    cps = cps+1
    console.log("amelioration + 1")

}

plusClick.onclick = function () {

    clicks = clicks + 1;
    nbr.innerHTML = clicks;

}

