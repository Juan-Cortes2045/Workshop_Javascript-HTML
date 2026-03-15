class Bank{
    constructor(){
        this.accounts=[];
    }

    register(name, identification, email){
        const account = new Account(name, identification, email, 0);
        this.accounts.push(account);

        return "Registered account";
    }

    searchAccount(identification){
        return this.accounts.find(a => a.identification === identification);
    }

}