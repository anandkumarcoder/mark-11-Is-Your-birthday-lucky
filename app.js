const userDateOfBirth = document.querySelector("#dateOfBirth");

const userLuckyNumber = document.querySelector("#luckyNumber");

const checkButton = document.querySelector("#checkButton")

const outputDiv =document.querySelector(".output")

checkButton.addEventListener ('click' ,  checkBirthDateIsLucky)



function checkBirthDateIsLucky(){
    const dob = userDateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum,userLuckyNumber.value)

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
        console.log("your birthday is lucky");
    } else {
        console.log("Sorry your birthday is not lucky")
    }
}