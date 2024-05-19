let clockArea = document.querySelector('#digittime');


function showTimes(){
let date = new Date();
let h = date.getHours() 
let m = date.getMinutes();
let s = date.getSeconds();
var session = "AM";

if(h == 0){
     h = 12;
 }
 
 if(h > 12){
     h = h - 12;
     session = "PM";
}

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

let result = h+' : '+ m +' : '+ s +' '+session;
document.getElementById('digittime').innerText = result;
document.getElementById("digittime").textContent = result;

}


setInterval(showTimes,1000)
