// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadgeLink(data) {

    if (data.license === 'GNU AGPLv3') {
      return  "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    }
    else if (data.license === "GNU GPLv3") { 
      return  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    else if (data.license === "Mozille Public License 2.0") { 
      return  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    else if (data.license === "Apache License 2.0") { 
      return  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if (data.license === "MIT License") {
      return  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if (data.license === "Boost Software License 1.0") { 
      return  "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    } else {
      return  "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
 function renderLicenseSection(data) {
  const answerArray = [ { answer:'GNU AGPLv3' }, { answer:'GNU GPLv3' }, { answer:'Mozille Public License 2.0' }, { answer:'Apache License 2.0' }, { answer:'MIT License' }, { answer:'Boost Software License 1.0' }, { answer:'The Unlicense' } ];
  const markup = `<ul class="answerArray">${answerArray.map(array => `<li>${array.answer}`).join('')}</ul>`;
   if (!data.license) {
     return ``;
   } 
return `## Licenses
  This application is covered under the following license(s): ${markup}`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //var totalLicense = renderLicenseBadgeLink(license);

  return `
  <h1 align="center">${data.title}</h1>

  ${renderLicenseBadgeLink(data)}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#licenses)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation 
  To install the necessary dependencies for this project, run the following command(s):
  ${data.installationInstructions}

  ## Usage 
  ${data.usageInformation}

  ${renderLicenseSection(data)}

  ## Contributors 
  ${data.contributionGuidelines}

  ## Test
  ${data.testInstructions}

  ## Questions
  Please contact me via GitHub or email with any questions, comments, or concerns. 
  * GitHub: [${data.userName}](https://github.com/${data.userName})
  * Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;