// Initialize account from local storage or set default values
const account = JSON.parse(localStorage.getItem("account")) || { name: "", balance: 0 };

// Function to save account data to local storage
function saveToLocalStorage() {
    localStorage.setItem("account", JSON.stringify(account));
}

// Function to update balance display
function updateBalanceDisplay() {
    document.getElementById("accountAmount").innerHTML = `₦${account.balance}`;
}

// Load stored data when the page loads
document.addEventListener("DOMContentLoaded", () => {
    if (account.name) {
        document.getElementById("personName").innerText = account.name;
        document.getElementById("account-section").style.display = "block";
        document.getElementById("hero").style.display = "none";
        updateBalanceDisplay();
    }
});

// For saving user details
document.getElementById("save").addEventListener("click", () => {
    const personName = document.getElementById("name").value.trim();
    const personAmount = Number(document.getElementById("amount").value.trim());
    const message = document.getElementById("message");

    if (personName === "" || isNaN(personAmount) || personAmount <= 0) {
        message.innerText = "Please enter a valid name and amount greater than 0.";
        message.style.color = "red";
        return;
    }

    account.name = personName;
    account.balance = personAmount;
    saveToLocalStorage();

    document.getElementById("hero").style.display = "none";
    document.getElementById("account-section").style.display = "block";
    document.getElementById("personName").innerText = account.name;
    updateBalanceDisplay();
    message.innerText = "";
});

// Function to show error messages
function showError(message) {
    let errorMessage = document.getElementById("error-message");
    if (errorMessage) errorMessage.remove();

    errorMessage = document.createElement("p");
    errorMessage.id = "error-message";
    errorMessage.textContent = message;
    errorMessage.style.color = "red";
    document.getElementById("action").appendChild(errorMessage);
}

// Function to clear input and hide action section
const buttonContainer = document.getElementById("buttons")
function resetTransactionUI() {
    document.getElementById("input").value = "";
    document.getElementById("action").style.display = "none";
    buttonContainer.style.display = "block";
    withdrawButton.disabled = false;
}

// For Withdrawal
const withdrawButton = document.getElementById("withdraw");
withdrawButton.addEventListener("click", () => {
    document.getElementById("action").style.display = "block";
    document.getElementById("what").textContent = "Withdraw";
    buttonContainer.style.display = "none";

    // Remove any previous event listeners to prevent multiple triggers
    const newWithdrawAction = document.getElementById("what").cloneNode(true);
    document.getElementById("what").replaceWith(newWithdrawAction);

    newWithdrawAction.addEventListener("click", () => {
        const amountInput = document.getElementById("input");
        const amount = Number(amountInput.value.trim());

        if (amount > account.balance) {
            showError("You cannot withdraw more than your balance.");
        } else if (amount <= 0) {
            showError("Enter a valid amount greater than 0.");
        } else {
            account.balance -= amount;
            saveToLocalStorage();
            updateBalanceDisplay();
            document.getElementById("error-message")?.remove();
        }

        resetTransactionUI();
    });
});

// For Deposit
const depositButton = document.getElementById("deposit");
depositButton.addEventListener("click", () => {
    document.getElementById("action").style.display = "block";
    document.getElementById("what").textContent = "Deposit";
    buttonContainer.style.display = "none";

    // Remove any previous event listeners to prevent multiple triggers
    const newDepositAction = document.getElementById("what").cloneNode(true);
    document.getElementById("what").replaceWith(newDepositAction);

    newDepositAction.addEventListener("click", () => {
        const amountInput = document.getElementById("input");
        const amount = Number(amountInput.value.trim());

        if (amount <= 0) {
            showError("You can't deposit an amount less than or equal to 0.");
        } else {
            account.balance += amount;
            saveToLocalStorage();
            updateBalanceDisplay();
            document.getElementById("error-message")?.remove();
        }

        resetTransactionUI();
    });
});
