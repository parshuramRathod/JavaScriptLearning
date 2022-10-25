const array_nums = [20, 3, 4, 56, 90, 400, 49];
console.log(array_nums);
console.log('=====================Number Pushed ========================');
array_nums.push(55, 66);
console.log(array_nums);
console.log('===================== Deep cloned using spread operator=====================');
let update_nums = {...array_nums };
array_nums[7] = 10;
array_nums[8] = 25;
console.log(update_nums);
console.log(array_nums);
console.log('==========================Give array Merged with new array ===================');
const other_array = [2, 30, 14, 8];
const merge_array = [...array_nums, ...other_array];
console.log(merge_array);
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: '40,0000INR',
        aug_month: '50,0000INR',
        jun_month: '65,0000INR'
    },
    adddress: {
        locality: {
            colony: "Om Vrindavan Society",
            street: "Kanch Pokli,431202",
        },
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
    },
    mobiles: ['+91 8600 3456 88', '1800-4567 32', '+91- 9096 5678 77']
}
console.log('=========================Employee details, address and mobile number logged ===========================');
console.log(employee_info);
console.log(employee_info.adddress.locality, employee_info.adddress.city, employee_info.adddress.state, employee_info.adddress.country);
console.log(employee_info.mobiles);
console.log('=================================Performed deep clone using spread operator=====================');
const update = { ...employee_info }
employee_info.adddress.street = 'Khau Galli';
console.log(employee_info.adddress);
console.log(update.adddress);
employee_info.mobiles[0] = '+91 8177 8535 70';
console.log(`ogrinal given mobile no. details : ${employee_info.mobiles}`);
console.log(`Mobile number changed : ${update.mobiles}`);
console.log('When we do deep clone using spread operator the changes also done in original object also.');
console.log('=================================Performed deep clone using JSON=====================');
const new_update = JSON.parse(JSON.stringify(employee_info))
console.log(employee_info.salary);
new_update.salary.july_month = '80,0000INR';
console.log(new_update.salary);

