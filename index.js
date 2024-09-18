const DecressBtn = document.getElementById("Decress");
const ResetBtn = document.getElementById("reset");
const IncressBtn = document.getElementById("Incress");
const countLabel = document.getElementById("countLabel");
let count = 0 ;


IncressBtn.onclick = function(){
    count ++;
    countLabel.textContent = count;
}

DecressBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
ResetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
