
document.addEventListener("DOMContentLoaded", function () {
    fetchBanks()
    let formDetails = document.getElementById("form");
    let warningMessageContainer = document.getElementById("warningMessageContainer"); 

    formDetails.addEventListener("submit", function (event) {
        event.preventDefault();
        const wholeNumberPattern = /^\d+$/;


        let accountNumber = document.getElementById("accountNumber").value;
        let bankName = document.querySelector("#bank-name").value;
        if (accountNumber.length === 10 && bankName !== "" && wholeNumberPattern.test(accountNumber)) {
            console.log(accountNumber);
            console.log(bankName);
             verifyAccount(accountNumber, bankName)
        } else {
            warningMessageContainer.innerHTML = "<p class='warning'>Account number is meant to be in 10 digits</p>";
        }

    });



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
            console.log(result);
            displayBankOwner(result);
        } else if(xhr.status === 404) {
         warningMessage.innerHTML = "<p class='warning'>Wrong account details</p>";

        }
        else {
            warningMessage.innerHTML = "<p class='warning'>Error verifying account</p>";
            console.error("Error verifying account:", xhr.status, xhr.statusText);
        }
    };
}


function displayBankOwner(accountDetails) {
    console.log("Result:", accountDetails);
    let resultDiv = document.getElementById("result");

    if (accountDetails && accountDetails.data && accountDetails.data.account_name) {
        resultDiv.innerHTML = `
            
            <p>${accountDetails.data.account_name}</p>
        `;
    } else {
        resultDiv.innerHTML = "<p class='error'>Unable to retrieve account details</p>";
    }
}