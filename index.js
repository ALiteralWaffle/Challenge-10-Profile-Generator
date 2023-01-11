const fs = require("fs");
const inquirer = require("inquirer");

// Makes responses a requirement
function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question with some kind on input.";
    }
}

const questions = [
    // Name
    {
        type: "input",
        name: "name",
        message: "What is the emplyoee's name: ",
        validate: validateInput,
    },

    // ID
    {
        type: "input",
        name: "id",
        message: "Enter the employee's ID: ",
        validate: validateInput,
    },

    // Email
    {
        type: "input",
        name: "email",
        message: "Enter the employee's email address: ",
        validate: validateInput,
    },

    // Role
    {
        type: "list",
        name: "role",
        message: "What is the employee's role: ",
        choices: [
            "Manager",
            "Engineer",
            "Inter",
        ],
        validate: validateInput,
    },
];

function init() {
    inquirer.prompt(questions).then((data) => {

    });
}

init();