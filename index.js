const account = {
    name: "",
    balance: 0
}
const btn = document.getElementById("save");
btn.addEventListener("click", () => {
    // Get input values
    const personName = document.getElementById("name").value.trim(); // Ensure no leading trailing space
    const personAmount = document.getElementById("amount").value; 
    const heroSection = document.getElementById("hero");
    const message = document.getElementById("message");

    // Check for empty fields
    if (personName === "" || personAmount === "") {
        message.innerText = "Please fill in all fields.";
        message.style.color = "red";
        return; // Exit the function early if validation fails
    }
    account.name = personName
    account.balance = personAmount

    // Parse the amount as a number

    // Check if the amount is valid (number and greater than 0)
    if (isNaN(personAmount) || personAmount <= 0) {
        message.innerText = "Please enter ₦ a valid saving amount greater than 0.";
        message.style.color = "red";
        return; // Exit the function early if validation fails
    }

    // If all validations pass\
    heroSection.style.display = "none"
    const accountSection = document.getElementById("account-section")
    accountSection.style.display = "block"
    const accountName = document.getElementById("personName")
    updateBalanceDisplay()
    accountName.innerHTML = account.name
    console.log(personAmount)
    console.log(personName)
    message.style.color = "green";
});

function updateBalanceDisplay(){
    document.getElementById("accountAmount").innerHTML = `₦${account.balance}`
}
// For withdrawal
const withdrawButton = document.getElementById("withdraw")
const depositButton = document.getElementById("deposit")
withdrawButton.addEventListener("click", () =>{
    const inputSection = document.getElementById("action")
    const buttonAction = document.getElementById("what")
    action.style.display = "block"
    buttonAction.textContent = "Withdraw"
    withdrawButton.style.display = "none"
    depositButton.style.display = "none"
    withdrawButton.disabled = true
    buttonAction.addEventListener("click", () => {
        const amountInput = document.getElementById("input")
       const amount = amountInput.value
       if(amount > account.balance){
          const errorMessage = document.createElement("p")
          errorMessage.textContent = `You this werey you wa withdraw pass expected `
       }else{
           account.balance -= amount
           updateBalanceDisplay()
       }
       inputSection.style.display = "none"
       amountInput.value = ""
       withdrawButton.disabled = false
       withdrawButton.style.display = "block"
      depositButton.style.display = "block"
    })
})

// For Deposit
depositButton.addEventListener("click", () =>{
    const inputSection = document.getElementById("action")
    const buttonAction = document.getElementById("what")
    action.style.display = "block"
    buttonAction.textContent = "Deposit"
    withdrawButton.style.display = "none"
    depositButton.style.display = "none"
    withdrawButton.disabled = true
    buttonAction.addEventListener("click", () => {
        const amountInput = document.getElementById("input")
       const amount = amountInput.value
       if(amount < 0){
          const errorMessage = document.createElement("p")
          errorMessage.textContent = `You can't add any money below 0`
       }else{
           account.balance += amount
           updateBalanceDisplay()
       }
      inputSection.style.display = "none"
       amountInput.value = ""
       withdrawButton.disabled = false
       withdrawButton.style.display = "block"
      depositButton.style.display = "block"
    })
})