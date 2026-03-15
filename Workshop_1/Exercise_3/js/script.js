const buttonRed= document.getElementById("btnRed");
const buttonBlue= document.getElementById("btnBlue");
const buttonGreen= document.getElementById("btnGreen");
const text= document.getElementById("text");

buttonRed.addEventListener("click", function(){
    document.body.style.background="red";
    text.style.color= "white";
});

buttonBlue.addEventListener("click", function(){
    document.body.style.background="blue";
    text.style.color= "lightblue";
});

buttonGreen.addEventListener("click", function(){
    document.body.style.background="green";
    text.style.color= "blue"
});