const inputName= document.getElementById("inputName");
const buttonAdd= document.getElementById("btnAdd");
const list= document.getElementById("list");

buttonAdd.addEventListener("click",function(){
    let name= inputName.value;
    const li= document.createElement("li");
    li.textContent=name;
    list.appendChild(li);
    const btnDelete= document.createElement("button");
    btnDelete.innerText= "Delete"
    btnDelete.id="btnDelete"
    li.appendChild(btnDelete);

    btnDelete.onclick=function(){
        li.remove();
    }
});




