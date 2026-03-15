const inputNumberOne= document.getElementById("inputNumberOne");
const inputNumberTwo= document.getElementById("inputNumberTwo");
const  btnSum= document.getElementById("btnSum");
const btnSubtraction= document.getElementById("btnSubtraction");
const btnMultiplication= document.getElementById("btnMultiplication");
const btnDivision= document.getElementById("btnDivision");
const result= document.getElementById("result");


btnSum.addEventListener("click", function(){
    numOne=Number(inputNumberOne.value);
    numTwo=Number(inputNumberTwo.value);
    sum= numOne+numTwo;
    result.innerText="Sum: "+sum;
});


btnSubtraction.addEventListener("click", function(){
    numOne=Number(inputNumberOne.value);
    numTwo=Number(inputNumberTwo.value);
    subtraction= numOne-numTwo;
    result.innerText="Subtraction: "+subtraction;
});

btnMultiplication.addEventListener("click", function(){
    numOne=Number(inputNumberOne.value);
    numTwo=Number(inputNumberTwo.value);
    multiplication= numOne*numTwo;
    result.innerText="Multiplication: "+multiplication;

});

btnDivision.addEventListener("click", function(){
    numOne=Number(inputNumberOne.value);
    numTwo=Number(inputNumberTwo.value);
    division= numOne/numTwo;
    result.innerText="Division: "+division;
})