document.addEventListener("DOMContentLoaded", function () {
    
    let balance = 0;
    const transactionsList = document.getElementById('transactionsList');
    const balanceElement = document.getElementById('balance');

    function addTransaction() {
        const textInput = document.getElementById('text');
        const amountInput = document.getElementById('amount');

        const text = textInput.value;
        const amount = parseFloat(amountInput.value);

        if (text.trim() === '' || isNaN(amount)) {
            alert('Please enter valid values for text and amount.');
            return;
        }

        const transaction = createTransactionElement(text, amount);
        transactionsList.appendChild(transaction);

        addAmount(amount);
        updateBalance();

        textInput.value = '';
        amountInput.value = '';
    }

    function createTransactionElement(text, amount) {
        const transaction = document.createElement('li');
        transaction.innerHTML = `
            ${text} <span>${amount >= 0 ? '+' : '-'}$${Math.abs(amount).toFixed(2)}</span>
        `;
        return transaction;
    }

    function addAmount(amount) {
        balance += amount;
    }

    function updateBalance() {
        balanceElement.textContent = balance.toFixed(2);
    }

  
    let formDetails = document.getElementById("form");
    let warningMessageContainer = document.getElementById("warningMessageContainer");

    formDetails.addEventListener("submit", function (event) {
        event.preventDefault();
        const wholeNumberPattern = /^\d+$/;

        let accountNumber = document.getElementById("accountNumber").value;
        let bankName = document.querySelector("#bank-name").value;

        if (accountNumber.length === 10 && bankName !== "" && wholeNumberPattern.test(accountNumber)) {
            verifyAccount(accountNumber, bankName);
        } else {
            warningMessageContainer.innerHTML = "<p class='warning'>Account number is meant to be in 10 digits</p>";
        }
    });

    function fetchBanks() {
        let url = "https://api.paystack.co/bank";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader("Authorization", "Bearer sk_test_eb68af8c15c1b62f52fdaad721ff213202369c08");
        xhr.send();

        xhr.onload = function () {
            if (xhr.status === 200) {
                let banks = JSON.parse(xhr.responseText).data;
                populateBankOptions(banks);
            } else {
                console.error("Error fetching banks:", xhr.status, xhr.statusText);
            }
        };
    }

    function populateBankOptions(banks) {
        let bankSelect = document.getElementById("bank-name");

        if (bankSelect) {
            banks.forEach(function (bank) {
                let option = document.createElement("option");
                option.value = bank.code;
                option.textContent = bank.name;
                bankSelect.appendChild(option);
            });
        } else {
            console.error("Error: Element with ID 'bank-name' not found.");
        }
    }

    function verifyAccount(accountNumber, bankCode) {
        let url = `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader("Authorization", "Bearer sk_test_eb68af8c15c1b62f52fdaad721ff213202369c08");
        xhr.send();

        xhr.onload = function() {
            if (xhr.status === 200) {
                let result = JSON.parse(xhr.responseText);
                displayBankOwner(result);
            } else if (xhr.status === 404) {
                warningMessage.innerHTML = "<p class='warning'>Wrong account details</p>";
            } else {
                warningMessage.innerHTML = "<p class='warning'>Error verifying account</p>";
                console.error("Error verifying account:", xhr.status, xhr.statusText);
            }
        };
    }

    function displayBankOwner(accountDetails) {
        let resultDiv = document.getElementById("result");

        if (accountDetails && accountDetails.data && accountDetails.data.account_name) {
            resultDiv.innerHTML = `<p>${accountDetails.data.account_name}</p>`;
        } else {
            resultDiv.innerHTML = "<p class='error'>Unable to retrieve account details</p>";
        }
    }

    fetchBanks();
});
