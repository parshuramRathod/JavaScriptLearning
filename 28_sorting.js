
const arrayOfNames = ['Anil','Shantanu','Nutan',"Suyog",'DD']
arrayOfNames.sort();

const arrayOfNumber = [2,3,5,4,6,1];
arrayOfNumber.sort((first,second)=>{
    return (first>second ? 1 : -1)
})
console.log(arrayOfNumber);