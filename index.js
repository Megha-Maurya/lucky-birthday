const dateOfBirth = document.querySelector("#birthdate");
const luckyNumber = document.querySelector("#lucky-no");
const checkButton = document.querySelector("#check-btn");
const output = document.querySelector(".result");

function compareValues(sum, luckyNumber){
    if(sum % luckyNumber === 0){
        output.innerText="Your birthday is lucky 🥳";
    } else {
        output.innerText="Oops! Your birthday is not so lucky";
    }
};

function calculate(dob){
   dob = dob.replaceAll("-","");
   let sum = 0;
   for( index = 0; index<= dob.length; index++){
       sum = sum + Number(dob.charAt(index));
       compareValues(sum, luckyNumber.value);
   }
   return sum;
}

function checkBirthdateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculate(dob);
};

checkButton.addEventListener('click', checkBirthdateIsLucky);