let hour = prompt ("Enter hour : ");
let min = prompt ("Enter minute");
let sec = prompt ("Enter sec");

console.log(`Time input:       ${hour}h ${min}m ${sec}s`);
if (sec < 59){
  sec++
  console.log(`One second later: ${hour}h ${min}m ${sec}s`);
} else if (sec >= "59" && min >= "59" && hour >= "23"){
  hour = 0;
  min = 0;
  sec = 0;
  console.log(`One second later: ${hour}h ${min}m ${sec}s`);
} else if (sec >= "59" && min >= "59"){
  hour++;
  min = 0;
  sec = 0;
  console.log(`One second later: ${hour}h ${min}m ${sec}s`);
} else if (sec >= "59"){
  min++;
  sec = 0;
  console.log(`One second later: ${hour}h ${min}m ${sec}s`);
}

  


