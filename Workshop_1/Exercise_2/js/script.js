const numberOne= document.getElementById("numberOne");
const numberTwo= document.getElementById("numberTwo");
const button= document.getElementById("btnCalculate");
const result= document.getElementById("result")

button.addEventListener("click",function(){
    let num1= Number(numberOne.value);
    let num2= Number(numberTwo.value);
    let sum= num1+num2;

    result.innerText= "Result:"+sum;

});