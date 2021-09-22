const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe this project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install the project?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How do you use the project?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who was involved in this project',
    },
    {
      type: 'checkbox',
      name: 'licenses',
      message: 'Which License did you use?',
      choices: ''
    },
  ]);
};

const generateMD  = (answers) =>
  `#Title 
  ## Description
  ##table of contents
  ##Installation
  ##Usage
  ##credits
  ##license
  ##badges
  ##features
  ##How to Contribute
  ##Tests
  `;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README2.md', generateMD(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
