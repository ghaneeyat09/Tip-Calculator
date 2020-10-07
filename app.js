//queried elements
let bill = document.querySelector(".bill");
let noOfPeople = document.querySelector(".no-of-people");
let service = document.querySelector("#service");
let tipAmount = document.querySelector(".tip-amount");
let totalAmount = document.querySelector(".total-amount");
let individualPay = document.querySelector(".individual-pay");
let btn = document.querySelector(".btn");

//functions
  //calculaye tip amount
function calcTipAmount() {
    let billVal = bill.value;
    let ValueOfPeople = noOfPeople.value;
    if(service.value === "Good - 10%"){
        let percentage = billVal * (10 * 0.01);
        tipAmount.innerHTML = percentage;
    }
    else if(service.value === "Great - 20%"){
        let percentage = billVal * (20 * 0.01);
        tipAmount.innerHTML = percentage;
    }
    else if(service.value === "Bad - 2%"){
        let percentage = billVal * (2 * 0.01);
        tipAmount.innerHTML = percentage;
    }
}
  //calculate total amount
function calcTotalAmount() {
    let billVal = bill.value;
    totalAmount.innerHTML = parseInt(billVal) + parseInt(tipAmount.innerHTML);
}
  //calculate individual payment
function calcIndividualPay() {
    individualPay.innerHTML = totalAmount.innerHTML / noOfPeople.value;
}
  //display elements in block
function displayBlock() {
    let calc = document.querySelectorAll(".calc");
    var i;
    for(i = 0; i < calc.length; i++){
        calc[i].style.display = "block";
    }
    
}
  //validate field
function validate() {
    if(bill.value !== "" && noOfPeople.value !== "" && service.value !== "Choose..."){
        displayBlock();
        calcTipAmount();
        calcTotalAmount();
        calcIndividualPay();
        
        setTimeout(clearField, 7000);
        
    }
    else if(bill.value === "" || noOfPeople.value === "" || service.value === "Choose..."){
        alert("please enter your field correctly");
    }
        
}
  //clear field
function clearField() {
    bill.value = "";
    noOfPeople.value = "";
    service.value = "";
      
    //clear elements displayed in block
    let calc = document.querySelectorAll(".calc");
    var i;
    for(i = 0; i < calc.length; i++){
        calc[i].style.display = "none";
    }

}
  //onclick of button
btn.onclick = function(){
validate();
}