class Account{

    constructor(name, identification, email, balance){
        this.name= name;
        this.identification= identification;
        this.email= email;
        this.balance= balance;
    }

    getInto(amount){
        this.balance+=amount;
        return "Sucessful entry. Balance: "+this.balance;
    }

    withdraw(amount){
        if(amount>this.balance){
            return "Insufficient founds"
        }
        this.balance-=amount;
        return "Successful retirement" 
    }
}