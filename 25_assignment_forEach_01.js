class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, 'Anil', 'IT', 50000, 'TCS');
const emp_radha = new Employee(33, 'Radha', 'HR', 74000, 'Wipro');
const emp_rishi = new Employee(55, 'Rishi', 'Finance', 47000, 'TCS');
const emp_sonali = new Employee(66, 'Sonali', 'Finance', 45000, 'Infy');
const emp_monika = new Employee(77, 'Monika', 'IT', 40000, 'Wipro');
const emp_viny = new Employee(88, 'Vinayak', 'IT', 75000, 'TCS');
const emp_mahi = new Employee(99, 'Mahesh', 'HR', 85000, 'Infy');
let arrayOfEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.error('=======================TCS company employee details===============================================');
arrayOfEmployee.forEach((arrayObject) => {
    if (arrayObject.emp_company == "TCS") {
        console.log(`The employee names and company details : ${arrayObject.emp_name},${arrayObject.emp_company}`);
    }
});
console.error('========================Employee salary greater than or equal to 50000 logged all details==============================================');
arrayOfEmployee.forEach((arrayObject) => {
    if (arrayObject.emp_salary >= 50000) {
        console.log(arrayObject);

    }
});
console.error('===========================================================================================================');
let sum = 0;
arrayOfEmployee.forEach((arrayObject) => {
    if (arrayObject.emp_salary) {
        sum = sum + arrayObject.emp_salary;
    }
});
console.log(`The total of all employee salary : ${sum}`);
console.log(`Average salary of employee is : ${sum / arrayOfEmployee.length}`);
console.error('====================The IT and HR department employees whose salary is greater than or equal to 75000 ====================================================');
arrayOfEmployee.forEach((arrayObject) => {
    if (arrayObject.emp_dept == "HR" && arrayObject.emp_salary >= 75000 ) {
        console.log(arrayObject);
    }
    if (arrayObject.emp_dept == "IT" && arrayObject.emp_salary >= 75000 ) {
        console.log(arrayObject);
    }
});
