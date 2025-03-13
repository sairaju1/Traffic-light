let stop=document.getElementById("stopButton");
let ready=document.getElementById("readyButton");
let go=document.getElementById("goButton");
let stoplight=document.getElementById("stopLight");
let readylight=document.getElementById("readyLight");
let golight=document.getElementById("goLight");
function fun1(){
    stop.style.backgroundColor="red";
    ready.style.backgroundColor="#4b5069";
    go.style.backgroundColor="#4b5069";
    stoplight.style.backgroundColor="red";
    readylight.style.backgroundColor="#4b5069";
    golight.style.backgroundColor="#4b5069";

}
function fun2(){
    ready.style.backgroundColor="yellow";
    stop.style.backgroundColor="#4b5069";
    go.style.backgroundColor="#4b5069";
    readylight.style.backgroundColor="yellow";
    stoplight.style.backgroundColor="#4b5069";
    golight.style.backgroundColor="#4b5069";
}
function fun3(){
    go.style.backgroundColor="green";
    ready.style.backgroundColor="#4b5069";
    stop.style.backgroundColor="#4b5069";
    golight.style.backgroundColor="green";
    readylight.style.backgroundColor="#4b5069";
    stoplight.style.backgroundColor="#4b5069";
}
