const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([

    // Title
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
    //Description
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of the project.',
    },
    //Installation Instructions
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps to install this project?',
    },
    //How to run the program
    {
      type: 'input',
      name: 'Usage',
      message: 'How do you use the project?',
    },
    //contributors
    {
      type: 'input',
      name: 'credits',
      message: 'Who was involved in this project?',
    },
    {
      type: 'input',
      name: 'githubusername',
      message: 'Please enter your Github User Name',
    },
    {
      type: 'input',
      name: 'githubuserprofile',
      message: 'Please enter your Github Profile Link',
    },
    //testing
    {
      type: 'input',
      name: 'tests',
      message: 'Please note any tests for your application.',
    },
    //features
    {
      type: 'checkbox',
      name: 'features',
      message: 'What programs did you use?',
      choices: ['HTML', 'CSS', 'Javascript', 'node.js', 'API'],
    },
    //License
    {
       type: 'checkbox',
       name: 'licenses',
       message: 'Which License did you use?',
       choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License',],
     }, 
  ]);
};

const generateMD  = (answers) =>
  `# **${answers.title}** 

  ## Description
  
  > ${answers.description}
  
  ---
  ## table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Features](#features)
  * [License](#license)
  ---
  ## Installation
   
    ${answers.installation} 


  ---
  ## Usage
  > ${answers.Usage}
  ---
  ## Contributors
  
  ### ${answers.credits } 
  ---

  ## Tests

  ${answers.tests} 
  ---

  ## license
  ---
  `;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README2.md', generateMD(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
