const button=document.getElementById("btnCount");
const result=document.getElementById("result");
let count=0;

    button.addEventListener("click", function(){
        count++;
        result.innerText= "Counter: "+count;
    });