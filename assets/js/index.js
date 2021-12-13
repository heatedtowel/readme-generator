const inquirer = require('inquirer');
const fs = require('fs');


function licenseGenerator(license) {
  console.log(license)
  switch (license) {
    case 'a':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'b':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'c':
      return `[![License](https://img.shields.io/badge/License-BSD-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'd':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  return '';
};

function generateReadMe(answers) {
  let license = licenseGenerator(answers.license)
  return `# ${answers.title}

  ${answers.description}

  ${license}
  
  ## Installation

  ${answers.install}

  ## Usage Information

  ${answers.usageInfo}

  ## Contributing Guidelines

  ${answers.contGuidelines}

  ## Testing Instructions
  
  ${answers.testInstructions}

  ## Link
  
  To view the latest changes to ${answers.title} and get the latest work please visit the link below 
  
  - [${answers.title}](https://${answers.github}.github.io/${answers.title}/)
  
  
  ## Contributors
  
  ${answers.github}
  - [Github](https://github.com/${answers.github}/$answers.{title})
  - [Email] (${answers.email})
  `;
};

function init() {
  inquirer
    .prompt([
      {
        name: 'title',
        message: `What is the title of your project? (please include a - in place of any spaces`,
      },
      {
        name: 'description',
        message: 'Please provide a description of your project.',
      },
      {
        name: 'install',
        message: 'What are the installation instructions?',
      },
      {
        name: 'usageInfo',
        message: 'What is the usage information',
      },
      {
        name: 'contGuidelines',
        message: 'Are there any contribution guidelines?',
      },
      {
        name: 'testInstructions',
        message: 'What are the test instructions?',
      },
      {
        type: 'list',
        choices: ['a', 'b', 'c', 'd'],
        name: 'license',
        message: 'Please choose a license',
      },
      {
        name: 'github',
        message: 'Enter your GitHub username please.',
      },
      {
        name: 'email',
        message: 'What is your email?',
      }
    ])
    .then((answers) => {
      const readMeGeneration = generateReadMe(answers);

      fs.writeFile('README.md', readMeGeneration, (err) =>
        err ? console.log(err) : console.log('Your README was successfully created!')
      );
    });
};

init();
