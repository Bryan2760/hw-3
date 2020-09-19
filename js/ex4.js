
count = 0;

while (count <3 ) {
  const pass = prompt("Enter password : ");
  if (pass === "secret") {
    console.log (`You entered the correct password after ${count} attempts`);
  }
  else (count++)
}
console.log(`Your account is locked! You failed to enter the correct password ${count} times`);



  

