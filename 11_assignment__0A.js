const bank_sbi = {
    bankName: "State Bank of India",
    branchCode: '112233',
    ifscCode: 'SBI0001123',
    interestRate: "8.8%"
}
const bank_location = {
    street: "Twin Solapur",
    city: "Solapur",
    pincode: "413001"
}
let cloneBankdetails = Object.assign({}, bank_sbi, bank_location);
console.log(`===============Cloned bankSbi and bankLocation with object assign method================`);
console.log(cloneBankdetails);
console.log('===============Cloned bankSbi and bankLocation with spread operator================');
let cloneBank = { ...bank_sbi, ...bank_location }
console.log(cloneBank);

const rate_of_interest = {
    homeLoanInterest: "8.4%",
    personalLoanInterest: "9.8%",
    dueInterest: "8.7%"
}
console.log('===============Cloned bankSbi and bankLocation and rateOfInterest with object assign method================');
let sbi_details = Object.assign({}, bank_sbi, bank_location, rate_of_interest);
console.table(sbi_details);
console.log('=============Object traversed using for of loop======================');
let sbidetails = [bank_sbi, bank_location, rate_of_interest]
for (const element of sbidetails) {
    console.log(element);
}