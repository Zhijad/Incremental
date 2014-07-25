var money = 0;
var clickStrength = 1;
var moneyPerSec = 0;
var clickUpgradeCost = 25;

$(document).ready(function(){
    $("#dragUpgrade").draggable({
        containment: '#wrapper'});
});

setInterval(function(){
    money = money+moneyPerSec;
    document.getElementById("money").innerHTML = "Money: "+Math.floor(money);
},10);

function clickAdd(){
    money = money+clickStrength;
}

function clickUpgrade(){
    if(money >= clickUpgradeCost){
        money = money-clickUpgradeCost;
        clickUpgradeCost = (clickUpgradeCost + 40)*1.1;
        clickStrength = clickStrength + 1;
        document.getElementById("moneyPerClick").innerHTML = "Per Click: "+Math.floor(clickStrength);
    }
}
function clickMulti(){
    clickStrength = clickStrength*1.1;
    document.getElementById("moneyPerClick").innerHTML = "Per Click: "+Math.floor(clickStrength);
}
function workerOne(){
    moneyPerSec = moneyPerSec + 0.01;
    document.getElementById("moneyPerSec").innerHTML = "Per Second: "+Math.round(moneyPerSec*100);
}

function hoverPrice(){

}