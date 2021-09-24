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
      name: 'installation1',
      message: 'Installation Step1:',
    },
    {
      type: 'input',
      name: 'installation2',
      message: 'Installation Step2:',
    },
    {
      type: 'input',
      name: 'installation3',
      message: 'Installation Step3:',
    },
    {
      type: 'input',
      name: 'installation4',
      message: 'Installation Step4:',
    },
    {
      type: 'input',
      name: 'installation5',
      message: 'Installation Step5:',
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
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License',],
    }, 
  ]);
};

const generateMD  = (answers) =>

  `# **${answers.title}** 
  ---

  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

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
   
   >${answers.installation1}

   >${answers.installation2} 
   
   >${answers.installation3} 
   
   >${answers.installation4} 
   
   >${answers.installation5} 
    


  ---
  ## Usage

  >${answers.Usage}
  
  ---
  ## Contributors
  
  ### ${answers.credits } 
  
  ---
  ## Features
  * ${answers.features}
  ---
  ## Tests

  ### ${answers.tests} 
  
  ---
  ## License
  
  ### ${answers.license}
  
  ---
  `;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README2.md', generateMD(answers)))
    .then(() => console.log('Successfully wrote to README2.md'))
    .catch((err) => console.error(err));
};

init();
