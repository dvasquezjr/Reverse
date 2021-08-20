//Get the string from the page
//Controller function
function getValue(){

  //Ensure class invisible is enabled
  document.getElementById("alert").classList.add("invisible");

  let userString = document.getElementById("userString").value;

  //Pass userString to reverseString function
  let revString = reverseString(userString);

  displayString(revString);

}

//Reverse the string
//Logic function
function reverseString(userString){

  let revString = [];

  //Reverse string using a for loop
  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index]; //RevString adds to itself after every iteration of the loop
    
  }
  
  return revString;

}

//Display with the reversed string
//View function
function displayString(revString){
  
  //Write msg to the page
  document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

  //Show the alert box
  document.getElementById("alert").classList.remove("invisible");

}