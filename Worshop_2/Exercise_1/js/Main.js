
function loadSection(route, idContainer, errorMessage){
    fetch(route)
    .then(response => response.text())
    .then(data =>{
        document.getElementById(idContainer).innerHTML=data;

    })
    .catch(error=>console.error(errorMessage, error));
}
loadSection("components/header.html", "header-container", "Error loading the header");
loadSection("pages/createAccount.html","createAccount-container", "Error loading the create Account section");
loadSection("pages/consultAccount.html", "consultAccount-container", "Error loading the consult account section");
loadSection("pages/depositMoney.html", "depositMoney-container", "Error loading the deposit money section");
loadSection("pages/withdrawMoney.html", "withdrawMoney-container", "Error loading the withdraw money section");

function accountNoFound(){
    alert("Account no found");
}
const bank = new Bank();

const btnRegister = document.getElementById("btnRegister");
const nameInput = document.getElementById("name");
const IDInput = document.getElementById("identification");
const emailInput = document.getElementById("email");


btnRegister.addEventListener("click", function(event){

    event.preventDefault();
    const name= nameInput.value;
    const id= IDInput.value;
    const email= emailInput.value;
    if(name==="" || id==="" || email===""){
        alert("Tienes que llenar todos los campos!!")
        return;
    }
    const message = bank.register(name, id, email);
    alert(message);
});

const consultID = document.getElementById("consultID");
const btnConsult = document.getElementById("btnConsult");
const result = document.getElementById("result");

btnConsult.addEventListener("click", function(event){
    event.preventDefault();

    const id = consultID.value;
    result.innerHTML = ""; 

    const resultConsult = document.createElement("p");
    resultConsult.id = "resultConsult";

    const account = bank.searchAccount(id);
    if(!account){
        accountNoFound();
        return;
    }

    resultConsult.innerHTML = "-Name: " + account.name + "<br>"
                            + "-ID: " + account.identification + "<br>"
                            + "-Email: " + account.email + "<br>"
                            + "-Balance: $"+ account.balance;

    result.appendChild(resultConsult);
});

const inputAccountID= document.getElementById("accountID");
const inputAmount= document.getElementById("depositAmount");
const btnDeposit= document.getElementById("btnDeposit");

btnDeposit.addEventListener("click", function(event){
    event.preventDefault();
    const accountId= inputAccountID.value;
    const depositAmount= parseFloat(inputAmount.value);
    
    const account=bank.searchAccount(accountId);

    if(!account){
        accountNoFound();
        return;
    }
    alert(account.getInto(depositAmount));
});

const inputWithdrawID= document.getElementById("withdrawID");
const inputWithdrawAmount= document.getElementById("withdrawAmount");
const btnWithdraw= document.getElementById("btnWithdraw");

btnWithdraw.addEventListener("click", function(event){
    event.preventDefault();
    const withdrawId=inputWithdrawID.value
    const withdrawAmount=parseFloat(inputWithdrawAmount.value);
    const account= bank.searchAccount(withdrawId);

    if(!account){
        accountNoFound();
        return;
    }
    alert(account.withdraw(withdrawAmount));
});

