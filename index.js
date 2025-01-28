// const personName= document.getElementById("name").value.trim()
// const personAmount = document.getElementById("amount").value.trim()
// const heroSection = document.getElementById("hero")
// const btn = document.getElementById("save")
// const message = document.getElementById("message")
// let amount = 0
// let person = {
//     name : personName,
//     amount : personAmount
// }
// btn.addEventListener("click", () => {
//    if(personName === "" || personAmount === "" ){
//       message.innerText = "input the necessary information"
//       message.style.color = "red"
//    }else{
//       heroSection.style.display = "none"

//    }
    
// })


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

    // Parse the amount as a number

    // Check if the amount is valid (number and greater than 0)
    if (isNaN(personAmount) || personAmount <= 0) {
        message.innerText = "Please enter a valid saving amount greater than 0.";
        message.style.color = "red";
        return; // Exit the function early if validation fails
    }

    // If all validations pass
    heroSection.style.display = "none"; // Hide the hero section
    message.innerText = `Thank you, ${personName}! Your saving goal of ₦${personAmount} has been set!`;
    console.log(personAmount)
    console.log(personName)
    message.style.color = "green";
});
