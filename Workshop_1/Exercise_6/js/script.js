const inputName= document.getElementById("inputName");
const inputEmail= document.getElementById("inputEmail");
const inputAge= document.getElementById("inputAge");
const button= document.getElementById("btnSend");
const result= document.getElementById("result");


button.addEventListener("click", function(){
    event.preventDefault();
    let name= inputName.value;
    let email= inputEmail.value;
    let age= inputAge.value;
    if(name==="" || email==="" || age===""){
        result.innerText= "Debe completar todos los campos"
    } else{
        result.innerHTML= "<p>-Name:"+name+"</p>"+"<p>-Email: "+email+"</p>"+"<p>- Age: "+age+"</p>";
    }
});