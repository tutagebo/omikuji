let userName,userResult;

userName = prompt("お名前を教えてください。");
if(!userName)userName="名無し"
document.getElementById("name").innerHTML = userName;

let resArray = ["大吉","小吉","吉","凶"];

let random = Math.floor(Math.random()*5);
if(random>=0&&random<5)userResult=resArray[random];

document.getElementById("result").innerHTML = userResult;