const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateHTML = (userInputs) => {

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',

  
  }
  ])

` <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title>Portfolio Generator</title>
</head>
<body>

 <ul class="collection with-header">
        <li class="collection-header"><h4>First Names</h4></li>
        <li class="collection-item">A</li>
        <li class="collection-item">B</li>
        <li class="collection-item">C</li>
        <li class="collection-item">D</li>
      </ul>

</body>
</html>`;

}
console.log(generateHTML)