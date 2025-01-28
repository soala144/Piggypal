let amount = 0
const btn = document.getElementById("save");
btn.addEventListener("click", () => {
    // Get input values
    const personName = document.getElementById("name").value.trim(); // Ensure no leading trailing space
    const personAmount = document.getElementById("amount").value; 
    const heroSection = document.getElementById("hero");
    const message = document.getElementById("message");
    amount = personAmount

    // Check for empty fields
    if (personName === "" || personAmount === "") {
        message.innerText = "Please fill in all fields.";
        message.style.color = "red";
        return; // Exit the function early if validation fails
    }

    
    let person = {
        name : personName,
        money : amount
    }


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
    const accountAmount = document.getElementById("accountAmount")
    const accountName = document.getElementById("personName")
    accountAmount.innerHTML = `₦${person.money}`
    accountName.innerHTML = person.name
    console.log(personAmount)
    console.log(personName)
    message.style.color = "green";
});
// For withdrawal
document.getElementById("withdraw").addEventListener("click", () =>{})

// For Deposit
document.getElementById("deposit").addEventListener("click", () =>{})