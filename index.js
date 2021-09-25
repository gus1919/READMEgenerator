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
      message: 'What dependencies are needed for this project?',
    },
    //How to run the program
    {
      type: 'input',
      name: 'Usage',
      message: 'How do you run the project?',
    },
    
    //contributors
    {
      type: 'input',
      name: 'credits',
      message: 'Please provide the names and emails of any collaborators.',
    },

    //testing
    {
      type: 'input',
      name: 'tests',
      message: 'Are there any tests for the project?',
    },
    //features
    {
      type: 'checkbox',
      name: 'features',
      message: 'What programs did you use?',
      choices: ['HTML', 'CSS', 'Javascript', 'node.js', 'API'],
    },

    {
      type: 'input',
      name: 'features',
      message: 'Any other programs not listed?',
         },

    //questions
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
    //License
    {
      type: 'list',
      name: 'license',
      message: 'Which License did you use?',
      choices: ['Apache', 'GNU', 'MIT',],
    }, 
  ]);
};

const generateMD  = (answers) =>

  `# **${answers.title}** 
  

  ![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)
  ---
  ## Description
  
  >${answers.description}
  
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
   
   >${answers.installation}
 
  ---
  ## Usage

  >${answers.Usage}
  
  ---
  ## Contributors
  
  ### Project Lead: ${answers.githubusername}

  GIThub Profile: ${answers.githubuserprofile}
  
  Additional contributors: ${answers.credits } 
  
  ---
  ## Features
  * ${answers.features}
  ---
  ## Tests

  ### ${answers.tests} 
  
  ---
  ## License
  
  ### This project is licensed by ${answers.license}
  
  `;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README2.md', generateMD(answers)))
    .then(() => console.log('Successfully wrote to README2.md'))
    .catch((err) => console.error(err));
};

init();
