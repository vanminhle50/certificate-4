// Declare variables (Elements)
let age = document.getElementById("age");
let intoxicated = document.getElementById("intoxicated");
let footwear = document.getElementById("footwear");

let celebrity = document.getElementById("celebrity");
let runcheck = document.getElementById("runCheck");
let result = document.getElementById("result");
// write runcheck event listener

runcheck.addEventListener("click", function () {
  // Get values from our form
  let ageValue =age.value;
  console.log(ageValue);
  let intoxicatedValue =intoxicated.checked;
  console.log(intoxicatedValue);
  let celebrityValue = celebrity.checked;
  console.log(celebrityValue);
  let footwearValue = footwear.checked;
  console.log(footwearValue);

  if (ageValue >=18 && intoxicatedValue==false && footwearValue==true ){
    result.textContent='You can go strait in';
  } else {if(ageValue>=18 && celebrityValue ==true){ 
    result.textContent='You can go strait in';
  } else   result.textContent='You not allow in here!';}
  // Write logic for output
  // Use if else statement
  /* Age >=18
    No intoxicated people
    Must be wearing footwear
    Celebrities can go strait in.
    */
});
