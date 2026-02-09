abstract class bankAccount{
    protected balance:number;

    constructor(
        public readonly accountNumber:number,
        public readonly accountName:string,
        initialDeposite:number
    ){
        this.balance=initialDeposite;
    }

    public deposite(amount:number):void {
        if(amount>0){
        this.balance+=amount;
        console.log(`[${this.accountNumber} has deposited ${amount}]. New balance is ${this.balance}`);
        }
    }

    abstract processEndOfMonth():void;


    public getBalance():number{
        return this.balance;
    }
}


class savingAccount extends bankAccount{
    constructor(
        accountNumber:number,
        accountName:string,
        balance:number,
        private interestRate:number
    ){
        super(accountNumber,accountName,balance)
    }

    processEndOfMonth():void{
        const interest=this.balance*this.interestRate;
        this.balance+=interest;
        console.log(`[Savings] Interest added: $${interest.toFixed(2)}. New Balance: $${this.balance.toFixed(2)}`);
    }
}


class checkingAccount extends bankAccount{
    private transactionCount:number=0;
    private readonly FEE_THRESHOLD:number=5;
    private readonly transaction_fee:number=1;

    constructor(
        accountNumber:number,
        accountName:string,
        balance:number,
    ){
        super(accountNumber,accountName,balance)
    }

    public withdraw(amount:number):void{
        if(amount<=this.balance){
            this.balance-=amount;
            this.transactionCount++;
            console.log(`[Checking] Withdrew: $${amount}. Transactions this month: ${this.transactionCount}`);
        }else{
            console.log('Insufficient fund');
        }
    }
    processEndOfMonth(): void {
        if(this.transactionCount>this.FEE_THRESHOLD){
            this.balance-=this.transaction_fee;
            console.log(`[Checking] Monthly fee of $${this.transaction_fee} applied.`);
        }
        this.transactionCount=0;
    }
}


const mySaving=new savingAccount(1212,'Anandhu',1000,.4);
const myChecking=new checkingAccount(1213,'arjun',2000);

myChecking.deposite(500);
mySaving.deposite(200);
myChecking.withdraw(100);
myChecking.withdraw(200);
myChecking.withdraw(655);
console.log(myChecking.getBalance());
myChecking.withdraw(300);
myChecking.withdraw(300);
myChecking.withdraw(300);

const allAccount:bankAccount[]=[mySaving,myChecking];
console.log(allAccount);