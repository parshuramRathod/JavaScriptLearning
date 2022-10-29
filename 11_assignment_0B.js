class Bank {
    constructor(bank_name, location, account_no, ifsc_code, interest_rate) {
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc_code = ifsc_code;
        this.interest_rate = interest_rate;
    }
    details(){
console.log(`Person Bank Details : ${this.bank_name},${this.location},${this.account_no},${this.ifsc_code,this.interest_rate}`);
    }
}
const axisBank = new Bank("Axis Bank","Solapur","00013353355","AXI00384","7.8%");
const sbiBank = new Bank("SBI Bank","Solapur","0002834874900","SBI008947","8.3%");
const iciciBank = new Bank("ICICI Bank","Solapur","2847478927","ICIC008948","8.8%");
const kotakBank = new Bank("Kotak Bank","Solapur","08008408494","KTK093900","7.7%");
const hdfcBank = new Bank("HDFC Bank","Solapur","000487627287","HDFC008490","8.3");
const panjabBank = new Bank("Panjab Bank","Solapur","39739294749","PNJB007293","9.1%");

const allBankDetails = [axisBank,sbiBank,iciciBank,kotakBank,hdfcBank,panjabBank];
console.log("===================All Object logged only bankName and location========================");
for (const element of allBankDetails) {
    console.log(element.bank_name,element.location);
}
console.log('=======================logged bank details of having name kotakBank=============================================');
for (const element of allBankDetails) {
    if (element==kotakBank) {
        console.log(element);
    }
}
console.log("===============================Details logged using for Of loop==================");
for (const element of allBankDetails) {
    console.log(element);
    
}
