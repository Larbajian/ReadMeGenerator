// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project",
    },
    {
      type: "input",
      name: "installations",
      message: "How does the user install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How can your project be used?",
    },
    {
      type: "checkbox",
      name: "licenses",
      message: "What licenses does your project use?",
      choices: [
        "MIT",
        "Apache License 2.0",
        "Educational Community License v2.0",
        "Mozilla Public License 2.0",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "What are the contribution guidelines?",
    },
    {
      type: "input",
      name: "tests",
      message: "How should your project be tested?",
    },
    {
      type: "input",
      name: "questions1",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "questions2",
      message: "What is your github URL?",
    },
    {
      type: "input",
      name: "questions3",
      message: "What is your email?",
    },
  ]);
};
const init = () => {
  promptUser().then((response) => {
    fs.writeFile(
      `${response.projectTitle}.md`,
      generateMarkdown(response),
      (err) => (err ? console.error(err) : console.log("Success!"))
    )
  });
};

init();
