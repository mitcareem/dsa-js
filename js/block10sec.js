console.log("start");
//write something here that will 10 sec to execute
let start = new Date().getTime(); //current time
let end = start;
while (end < start + 10000) {
    end = new Date().getTime()
}
console.log("end");
