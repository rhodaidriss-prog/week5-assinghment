/*
=========================================
SPENDWISE JAVASCRIPT FOUNDATION
=========================================
*/

/*
=========================================
1. APPLICATION VARIABLES
=========================================
*/

// Default budgeting information
let defaultBudget = 80000;
let defaultExpenses = 42500;

// Calculate the default remaining balance
let defaultBalance = defaultBudget - defaultExpenses;

/*
=========================================
2. REUSABLE CALCULATION FUNCTION
=========================================
*/

// This function calculates the remaining balance.
function calculateBalance(budget, expenses) {
return budget - expenses;
}

/*
=========================================
3. DISPLAY DEFAULT DATA IN CONSOLE
=========================================
*/

console.log("========== SpendWise Dashboard ==========");
console.log("Default Budget: KSh " + defaultBudget);
console.log("Default Expenses: KSh " + defaultExpenses);
console.log("Default Remaining Balance: KSh " + defaultBalance);
console.log("=========================================");

/*
=========================================
4. GET HTML ELEMENTS
=========================================
*/

const calculateButton = document.getElementById("calculateButton");

const budgetDisplay = document.getElementById("budgetDisplay");

const expenseDisplay = document.getElementById("expenseDisplay");

const remainingDisplay = document.getElementById("remainingDisplay");

/*
=========================================
5. COLLECT USER INPUT
=========================================
*/

function getBudgetInformation() {

// Ask the user for their budget
let budgetInput = prompt(
    "Enter your total budget in KSh:"
);

// Ask the user for their expenses
let expenseInput = prompt(
    "Enter your total expenses in KSh:"
);


/*
    Convert the text entered by the user
    into numbers.
*/

let budget = Number(budgetInput);

let expenses = Number(expenseInput);


/*
    Check that the user entered valid numbers.
*/

if (
    budgetInput === null ||
    expenseInput === null
) {
    console.log("Budget calculation cancelled.");

    return;
}


if (
    isNaN(budget) ||
    isNaN(expenses) ||
    budget < 0 ||
    expenses < 0
) {
    console.log("Please enter valid positive numbers.");

    alert(
        "Please enter valid numbers for your budget and expenses."
    );

    return;
}


/*
    Calculate the remaining balance
    using the reusable function.
*/

let remainingBalance = calculateBalance(
    budget,
    expenses
);


/*
    Display results in the console.
*/

console.log("========== Your Budget ==========");
console.log("Budget: KSh " + budget);
console.log("Expenses: KSh " + expenses);
console.log(
    "Remaining Balance: KSh " + remainingBalance
);
console.log("=================================");


/*
    Display results on the webpage.
*/

budgetDisplay.textContent =
    "KSh " + budget.toLocaleString();

expenseDisplay.textContent =
    "KSh " + expenses.toLocaleString();

remainingDisplay.textContent =
    "KSh " + remainingBalance.toLocaleString();


/*
    Show the user their result.
*/

if (remainingBalance > 0) {

    alert(
        "You have KSh " +
        remainingBalance.toLocaleString() +
        " remaining."
    );

} else if (remainingBalance === 0) {

    alert(
        "Your budget has been fully used."
    );

} else {

    alert(
        "You are over budget by KSh " +
        Math.abs(remainingBalance).toLocaleString() +
        "."
    );
}


}

/*
=========================================
6. BUTTON EVENT
=========================================
*/

calculateButton.addEventListener(
"click",
getBudgetInformation
);