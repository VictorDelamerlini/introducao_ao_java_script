var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0

document.getElementById("adicionar").addEventListener("click", increment);

document.getElementById("subtrair").addEventListener("click", decrement);

function increment(){
    currentNumber=currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber
    if (currentNumber>=0){
        document.getElementById('currentNumber').style.color='black'
    }

}

function decrement(){
    currentNumber=currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber
    if (currentNumber<0){
        document.getElementById('currentNumber').style.color='red'
    }
   
}



