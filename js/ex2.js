const day = prompt ("Enter a day of the week");

switch(day){
  case "sun":
    console.log(`You Entered: ${day}`)
    console.log("The following day is: mon")
    break;
  case "mon":
    console.log(`You Entered ${day}`)
    console.log("The following day is: tue")
    break;
  case "tue":
    console.log(`You Entered ${day}`)
    console.log("The following day is: wed")
    break;
  case "wed":
    console.log(`You Entered ${day}`)
    console.log("The following day is: thu")
    break;
  case "thu":
    console.log(`You Entered ${day}`)
    console.log("The following day is: fri")
    break;
  case "fri":
    console.log(`You Entered ${day}`)
    console.log("The following day is: sat")
    break;
  case "sat":
    console.log(`You Entered ${day}`)
    console.log("The following day is: sun")
    break;
  default: 
    console.log("Not a valid day of the week");
};
  