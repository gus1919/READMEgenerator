const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([

    
    //User information
    {
      type: 'input',
      name: 'username',
      message: 'What is your Name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github user name?',
    },
    
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
      message: 'Pleas provide a short description of the project.',
    },
    //Installation Instructions
    {
      type: 'input',
      name: 'installation',
      message: 'What is needed to install or run this project (i.e. dependencies, programs, etc...)?',
    },
    //How to run the program
    {
      type: 'input',
      name: 'use',
      message: 'How do you execute this program?',
    },

    //testing
    {
      type: 'input',
      name: 'test',
      message: 'Are there any known issues or future developments?',
    },
    
    //contributors
    {
      type: 'input',
      name: 'credits',
      message: 'Who contributed to this project?',
    },

    //features
    {
      type: 'checkbox',
      name: 'features',
      message: 'What programs did you use?',
      choices: [' HTML', ' CSS', ' Javascript', ' node.js', ' API'],
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
  

  ![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)
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
  ## Use

  >${answers.use}
  
  ---
  ## Contributors

  Primary Contributor: ${answers.username}
  
  If you have any questions regarding this program, please contact me by email: ${answers.email}.
  
  My github profile is: https://github.com/${answers.github}

  Additional Contributors: ${answers.credits}

  ---
  ## Features
  * ${answers.features}
  ---
  ## Known Issues and Future Development

  ### ${answers.test} 
  
  ---
  ## License
  
  ### This project is licensed by ${answers.license}.
  
  `;

const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README2.md', generateMD(answers)))
    .then(() => console.log('Successfully wrote to README2.md'))
    .catch((err) => console.error(err));
};

init();
