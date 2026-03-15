const btnStart= document.getElementById("btnStart");
const btnStop= document.getElementById("btnStop");
const btnRestart= document.getElementById("btnRestart")
const timer= document.getElementById("timer");

let interval=null
let seconds=0;
btnStart.addEventListener("click", function(){
    if(interval==null){
        interval=setInterval(function() {
           seconds++
           timer.innerText= "Timer: "+ seconds; 
        }, 1000);   
    }   

});


btnStop.addEventListener("click", function(){
        clearInterval(interval);
        interval=null;
});


btnRestart.addEventListener("click", function(){
        clearInterval(interval);
        interval=null;

        seconds=0;
        timer.innerText= "Timer: "+seconds;
})

