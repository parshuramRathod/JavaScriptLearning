function do_assignment(callback) {
    console.log("I am doing assignment and it is done now...");
    callback();
}
function copy_assingment() {
    console.log("Hey bro... Thank you. Let me copy");
}

do_assignment(copy_assingment);

function display(params) {
    console.log("display fuction");
}
setTimeout(display,4000);//after 4sec settime out call

setInterval(display,2000);//for every interval of call 2sec