//function renderLicenseBadge(license) {} //hceck license an creates license

    /*switch(license) {
    case "MIT":
        license ="\n-![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      break;
    case "Perl":
        license ="\n-![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)";

      break;
      case "SIL":
        license ="\n-![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)"
      break;
    default:
        license = "none.";
*/

//function renderLicenseLink(license) {}

//function renderLicenseSection(license) {} //goes into prompt questions

    
function generateMarkdown(data) {
    return `# ${data.projectTitle}
  
  ## Description
  
  -${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  
  ## Installation
  
  -${data.installations}
  
  ## Usage
  
  -${data.usage}
  
  ## Credits
  
  ${data.licenses}
  
  ## How to Contribute
  
  -${data.contributing}
  
  ## Tests
  
  -${data.tests}

  ## Questions

  -${data.questions1}
  -${data.questions2}
  -${data.questions3}

  
  `;
  }
  module.exports = generateMarkdown;