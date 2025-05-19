let box1=document.getElementById('box1');
let box2=document.getElementById('box2');
let addresult=document.getElementById('addresult');
let result=document.getElementById('result');
let fran=document.getElementById('deginput');
let franresult=document.getElementById('degresult');
let calcresult=document.getElementById('calcresult');
let interval_id;
let global_value=0;
let str1="";
function addtwonumber(){
    let c=parseInt(box1.value)+parseInt(box2.value);
    addresult.innerText=`RESULT OF 2 NUMBER IS ${c}`;
}

function start(){
    interval_id=setInterval(()=>{
        global_value++;
        result.innerText=`${global_value}`;
    },500)
    startAnimation();
}

function stop(){
    clearInterval(interval_id);
}

function restart(){
    global_value=0;
    clearInterval(interval_id);
    result.innerText='0';
    resetAnimation();
}

function frantocel(){
    let valueoffran=((fran.value-32)*5)/9;
    franresult.innerText=`Celcius is ${valueoffran}`;
}

function calc(y){
    str1=str1+y;
    calcresult.innerText=`${str1}`;
}

function del(){
    str1=str1.slice(0,-1);
    calcresult.innerText=`${str1}`;   
}

function elavaluate(){
    let ans=eval(str1);
    calcresult.innerText=`${ans}`; 
}

function startAnimation() {
    let result = document.getElementById("result");
    result.style.transition = "color 0.5s ease-in-out";
    result.style.color = "red";
}

function resetAnimation() {
    let result = document.getElementById("result");
    result.style.color = "black";
}