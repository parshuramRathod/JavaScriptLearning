let teacher = "";
let teacherDetails = {
name: 'Gajanan Sir',
profession: 'Teacher and Software Developer',
height: '5.8feet',
city: 'Pune',
mobileNo: '1234 5678 90',
degrees:{
    metric: 'SSC',
    postMetric:'HSC',
    graduation:"B.E(Computer Engineering)",
    postgraduation:'M.Tech',
    phd:'Adv Computing'
},
certificates: {
    certOne: 'Hacker Rank Participation',
    cerTwo: 'Certificate in IFE course',
    certThree: 'Certificate in Adv Computing'
},
degree : function () {
    let degreeConcat = `Teacher All degrees are : ${teacherDetails.degrees.metric},${teacherDetails.degrees.postMetric},${teacherDetails.degrees.graduation},${teacherDetails.degrees.postgraduation},${teacherDetails.degrees.phd}`
    return degreeConcat
}
}
let degreeDetails = teacherDetails.degree();
console.error('------------------All degree concated-------------------');
console.log(degreeDetails);
console.error('------------------New birthDate property added-------------------');
teacherDetails.birthDate = ' 22Aug1974';
console.log(teacherDetails);
console.error('------------------ City Modified-------------------');
teacherDetails.city = "Aurangabad";
console.log(teacherDetails);
console.error('------------------One certificate Deleted-------------------');
console.log(teacherDetails.certificates);
delete teacherDetails.certificates.certOne;
console.log(teacherDetails.certificates);
console.error('------------------ certificate Added-------------------');
teacherDetails.certificates.newCertificate = "Certification in Full Stack Developer"
console.log(teacherDetails.certificates);


