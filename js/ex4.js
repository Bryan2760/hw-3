
count = 0;

while (count <3 ) {
  const pass = prompt("Enter password : ");
  if (pass === "secret") {
    alert (`You entered the correct password after ${count} attempts`);
  }
  else (count++)
}
alert(`Your account is locked! You failed to enter the correct password ${count} times`);



  

