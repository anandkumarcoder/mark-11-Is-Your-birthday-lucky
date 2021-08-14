const userDateOfBirth = document.querySelector("#dateOfBirth");

const userLuckyNumber = document.querySelector("#luckyNumber");

const checkButton = document.querySelector("#checkButton")

const outputDiv =document.querySelector(".output")

checkButton.addEventListener ('click' ,  checkBirthDateIsLucky)



function checkBirthDateIsLucky(){
    const dob = userDateOfBirth.value;
    const sum = calculateSum(dob);
    
    if(sum && dob)
    compareValues(sum,userLuckyNumber.value)
        outputDiv.innerText = "please enter both the fields"
     

}



function calculateSum(dob){
    dob = dob.replaceAll("-",""); //replacing charcter
    let sum = 0;
    for( let index=0; index<dob.length; index++){
        sum = sum + Number(dob.charAt(index));
        //converting to strings to number
        //0+number of character in dob  
    }
return sum;
}


function compareValues(sum,userLuckyNumber){
    if(sum%userLuckyNumber===0){
        outputDiv.innerText =("your birthday is lucky");
    } else {
        outputDiv.innerText =("Sorry your birthday is not lucky")
    }
}