// function to generate markdown for README
// will take answers from index to here and generate README file
function generateMarkdown(data) {
  return `
  
  # ${data.readmeTitle}
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tools](#tools)
  * [License](#license)
  * [Roadmap](#roadmap)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.readmeDescription}
  
  ## Installation
  ${data.readmeInstall}
  
  ## Usage
  ${data.readmeUsage}
  
  ## License
  ${data.readmeLicense}
  
  ## Contributions
  ${data.readmeContributing}
  
  ## Tests
  ${data.readmeTesting}
  
  ## Questions
  Click [here](https://github.com/${data.username}) to visit my Github profile.
  Or email all questions to: ${data.readmeQuestions}

`;
}

module.exports = generateMarkdown;
