const cardNameInput = document.getElementById('card_name');
const cardNameText = document.getElementById('name');

const cardNumberInput = document.getElementById('card_number');
const cardNumberText = document.getElementById('card_numbers');

const cardMonthInput = document.getElementById('card_month');
const cardMonthText = document.getElementById('month');

const cardYearInput = document.getElementById('card_year');
const cardYearText = document.getElementById('year');


const cardCVCInput = document.getElementById('card_cvc');
const cardCVCText = document.getElementById('cvc');


const cardForm = document.getElementById('cardForm');
const submitButton = document.getElementById('submit_btn');
const continueButton = document.getElementById('proceed');
const thankYou = document.getElementById('thank_you');

cardNameInput.addEventListener('input', function(){
    cardNameText.textContent = cardNameInput.value;
})

cardNumberInput.addEventListener('input', function(){

  // Format the value with spaces in groups of four digits
  const formattedValue = cardNumberInput.value.replace(/(\d{4})/g, '$1 ');

  // Update the text of the span with the formatted value
  cardNumberText.textContent = formattedValue.trim();
})

cardMonthInput.addEventListener('input', function(){
    cardMonthText.textContent = cardMonthInput.value;

})

cardYearInput.addEventListener('input', function(){
    cardYearText.textContent = cardYearInput.value;

})

cardCVCInput.addEventListener('input', function(){
    cardCVCText.textContent = cardCVCInput.value;

})

submitButton.addEventListener('click', function(event){
    // Prevent the form from submitting
    event.preventDefault();

    // Check if any of the input fields are empty
    let hasError = false;

    if (cardNameInput.value.trim() === "") {
        cardNameInput.nextElementSibling.textContent = "Please enter cardholder name";
        cardNameInput.nextElementSibling.style.color = "red";
        cardNameInput.classList.add("error-input");

        hasError = true;
    } else {
        cardNameInput.nextElementSibling.textContent = "";
    }

    if (cardNumberInput.value.trim() === "") {
        cardNumberInput.nextElementSibling.textContent = "Please enter card number";
        cardNumberInput.nextElementSibling.style.color = "red";
        cardNumberInput.classList.add("error-input");
        hasError = true;
    } else {
        cardNumberInput.nextElementSibling.textContent = "";
    }

    if (cardCVCInput.value.trim() === "") {
        cardCVCInput.nextElementSibling.textContent = "Please enter CVC";
        cardCVCInput.nextElementSibling.style.color = "red";
        cardCVCInput.classList.add("error-input");
        hasError = true;
    } else {
        cardCVCInput.nextElementSibling.textContent = "";
    }

    if(cardYearInput.value.trim() == ""){
        cardYearInput.nextElementSibling.textContent = "enter year";
        cardYearInput.nextElementSibling.style.color = "red";
        cardYearInput.classList.add("error-input");
        hasError = true;

    }else{
        cardYearInput.nextElementSibling.textContent = "";
    }


    if(cardMonthInput.value.trim() == ""){
        cardMonthInput.nextElementSibling.textContent = "enter month";
        cardMonthInput.nextElementSibling.style.color = "red";
        cardMonthInput.classList.add("error-input");
        hasError = true;

    }else{
        cardMonthInput.nextElementSibling.textContent = "";
    }



    // If there are no errors, proceed to hide the form and show the thank you message
    if (!hasError) {
        cardForm.style.display = 'none';
        thankYou.classList.remove("hidden_ele");
    }
});


continueButton.addEventListener('click', function(){
    location.reload();
})
