SpendWise Dashboard
Project Description

SpendWise is a simple personal budgeting dashboard designed to help users understand their budget, expenses, and remaining balance.

The project started as a visual dashboard and has now been extended with JavaScript functionality.

This week's assignment focuses on building the JavaScript foundation of SpendWise using variables, data types, user input, calculations, functions, and console output.

Project Files

The project contains four main files:

index.html – Contains the structure and content of the SpendWise dashboard.

style.css – Contains the visual design, layout, responsive styling, colors, and dashboard card styling.

script.js – Contains the JavaScript logic for collecting user input, performing calculations, and displaying results.

README.md – Explains the project and the JavaScript concepts used.

What SpendWise Does

SpendWise displays a financial dashboard containing:

Total budget

Total expenses

Remaining balance

Food spending

Transport spending

Rent

Entertainment

Savings

Utilities

The user can click the Calculate Balance button to enter their own budget and expenses.

JavaScript then calculates the remaining balance.

JavaScript Concepts Implemented
1. Variables

Variables are used to store important budgeting information.

For example:

let defaultBudget = 80000;
let defaultExpenses = 42500;


These variables represent the default budget and expenses used by the application.

The project also uses const for HTML elements that do not need to be reassigned.

For example:

const calculateButton =
    document.getElementById("calculateButton");

2. Data Types

The project works mainly with:

Numbers

Strings

Boolean values

null

Budget and expense values are converted into numbers before calculations are performed.

3. User Input

The application collects user input using JavaScript's prompt() function.

The user is asked to enter:

Their total budget.

Their total expenses.

Example:

let budgetInput = prompt(
    "Enter your total budget in KSh:"
);

4. Number Conversion

The values returned by prompt() are strings.

Therefore, the application converts them into numbers using Number().

Example:

let budget = Number(budgetInput);
let expenses = Number(expenseInput);


This allows JavaScript to perform mathematical calculations correctly.

5. Budget Calculations

The application calculates the remaining balance by subtracting expenses from the budget.

The formula is:

Remaining Balance = Budget - Expenses


For example:

Budget = KSh 50,000
Expenses = KSh 15,000

Remaining Balance = KSh 35,000

6. Functions

A reusable function called calculateBalance() is used to perform the budget calculation.

function calculateBalance(budget, expenses) {
    return budget - expenses;
}


The function accepts the budget and expenses as parameters and returns the remaining balance.

This makes the calculation reusable and keeps the JavaScript code organized.

7. Console Output

The calculated information is displayed in the browser console using console.log().

For example:

console.log("Budget: KSh " + budget);
console.log("Expenses: KSh " + expenses);
console.log(
    "Remaining Balance: KSh " + remainingBalance
);


To see the output:

Open the SpendWise website.

Open the browser Developer Tools.

Select the Console tab.

Click Calculate Balance.

Enter your budget and expenses.

8. Displaying Results

The calculated values are also displayed on the dashboard.

JavaScript updates the HTML using:

element.textContent


For example:

remainingDisplay.textContent =
    "KSh " + remainingBalance.toLocaleString();


This changes the Remaining Balance displayed on the dashboard.

How the Application Works

The process is:

The SpendWise dashboard loads.

JavaScript loads from script.js.

Default budget information is stored in variables.

The default balance is calculated.

The user clicks Calculate Balance.

JavaScript asks the user for their budget.

JavaScript asks the user for their expenses.

The input is converted from strings into numbers.

The calculateBalance() function calculates the remaining balance.

The results are displayed in the browser console.

The dashboard is updated with the new values.

The user receives a message showing their remaining balance or amount over budget.

Testing

The application was tested using different budget and expense values.

Example 1
Budget: KSh 50,000
Expenses: KSh 15,000
Remaining: KSh 35,000

Example 2
Budget: KSh 80,000
Expenses: KSh 42,500
Remaining: KSh 37,500

Example 3
Budget: KSh 30,000
Expenses: KSh 35,000
Remaining: -KSh 5,000


When expenses are greater than the budget, SpendWise informs the user that they are over budget.

Conclusion

The SpendWise project now has a JavaScript foundation in addition to its HTML and CSS interface.

The project demonstrates:

Variables

Data types

User input

Number conversion

Calculations

Functions

Return values

Console output

DOM manipulation

Basic input validation

This JavaScript foundation can be expanded in future weeks to support more advanced budgeting and expense-management functionality.