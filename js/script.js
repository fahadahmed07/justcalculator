var body = document.body;
var btnDiv = document.getElementById("btnDiv");
var bgCustom = document.getElementById("bgCustom");
var darkBtn = document.getElementById("darkBtn");
var lightBtn = document.getElementById("lightBtn");
var result = document.getElementById("result");
var input = document.getElementsByTagName("input");
// Funtion for dark and light UI
function changeUI(n){
    var bodyColVal = n;
    switch (bodyColVal){
        case 0:
        body.className = body.className.replace("bg-secondary", "bg-light");
        btnDiv.className = btnDiv.className.replace("bg-white", "bg-dark");
        bgCustom.style.backgroundColor = "#272e34";
        darkBtn.className = darkBtn.className.replace("text-muted", "text-white");
        lightBtn.className = lightBtn.className.replace("text-dark", "text-muted");
        result.className = result.className.replace("text-dark", "text-white");
        for(let i = 0; i < input.length - 1; i++){
            input[i].className = input[i].className.replace("text-secondary", "text-light");
        }
        break;
        case 1:
        body.className = body.className.replace("bg-light", "bg-secondary")
        btnDiv.className = btnDiv.className.replace("bg-dark", "bg-white")
        bgCustom.style.backgroundColor = "#f5f5f7"
        darkBtn.className = darkBtn.className.replace("text-white", "text-muted");
        lightBtn.className = lightBtn.className.replace("text-muted", "text-dark");
        result.className = result.className.replace("text-white", "text-dark");
        for(let i = 0; i < input.length - 1; i++){
            input[i].className = input[i].className.replace("text-light", "text-secondary");
        }
        break;
    }
}
var saveValue = []
function getValues(n){
    
    var calValue = document.getElementById("calValue").innerHTML;
    console.log(calValue.length);
    if(calValue.length !== 20){
        // saveValue.push(n);
        // document.getElementById("calValue").innerHTML = saveValue.join("");
        if(document.getElementById("calValue").innerHTML === "0"){
            saveValue.push(n);
            document.getElementById("calValue").innerHTML = saveValue.join("");
        }else{
            saveValue.push(n);
            document.getElementById("calValue").innerHTML = saveValue.join("");
        }
    }
}
function calculate(){
    var calculate = document.getElementById("calValue").innerHTML;
    var result = eval(calculate);
    var checkLenght = result.toString().split("");
    if(checkLenght.length > 10){
        result = result.toFixed(8);
        document.getElementById("result").innerHTML = result;
        saveValue = [];
        saveValue.push(result);
    }else{
        document.getElementById("result").innerHTML = result;
        saveValue = [];
        saveValue.push(result);
    }
}
function clearValue(){
    saveValue = [];
    document.getElementById("result").innerHTML = "00";
    document.getElementById("calValue").innerHTML = "0";
}
function sqrRoot(){
    var sqrRootVal = document.getElementById("calValue").innerHTML;
    var result = Math.sqrt(sqrRootVal);
    var checkLenght = result.toString().split("");
    if(checkLenght.length > 10){
        result = result.toFixed(8);
        document.getElementById("result").innerHTML = result;
        saveValue = [];
        saveValue.push(result);
    }else{
        document.getElementById("result").innerHTML = result;
        saveValue = [];
        saveValue.push(result);
    }
}
function delVal(){
    saveValue.pop();
    document.getElementById("calValue").innerHTML = saveValue.join(""); 
}