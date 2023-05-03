//your JS code here. If required.
let time = document.getElementById("timer");

function f(){
	let s= new Date().toLocaleString();
	time.innerText=s;
}
setInterval(f,1000)