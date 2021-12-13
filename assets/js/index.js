const inquirer = require('inquirer');
const fs = require('fs');


const generateReadMe = ({ title, description, install, usageInfo, contGuidelines, testInstructions, license, github, email }) =>
  `# ${title}

  ${description}
  
  ## Installation

  ${install}
  
  ## Link
  
  To view the latest changes to ${title} and get the latest work please visit the link below 
  
  - [${title}](https://${github}.github.io/${title}/)
  
  
  ## Contributors
  
  ${github}
  - [Github](https://github.com/${github}/${title})
  `;

function init() {
  inquirer
    .prompt([
      {
        name: 'title',
        message: 'What is the title of your project?',
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
      console.log(answers)
      const readMeGeneration = generateReadMe(answers);

      fs.writeFile('README.md', readMeGeneration, (err) =>
        err ? console.log(err) : console.log('Your README was successfully created!')
      );
    });
}

init();
