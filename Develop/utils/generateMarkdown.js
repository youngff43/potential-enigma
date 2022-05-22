// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'GNU AGPLv3') {
    return '[![${license} license](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](${renderLicenseLink(license)})'
  }
  if (license === 'GNU GPLv3') {
    return '[![${license} license](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license)})'
  }
  if (license === 'Mozille Public License 2.0') {
    return '[![${license} license](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)(${renderLicenseLink(license)})'
  }
  if (license === 'Apache License 2.0') {
    return '[![${license} license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(${renderLicenseLink(license)})'
  }
  if (license === 'MIT License') {
    return '[![${license} license](https://img.shields.io/badge/License-MIT-yellow.svg)(${renderLicenseLink(license)})'
  }
  if (license === 'Boost Software License 1.0') {
    return '[![${license} license](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)(${renderLicenseLink(license)})'
  }
  if (license === 'The Unlicense') {
    return '[![${license} license](https://img.shields.io/badge/license-Unlicense-blue.svg)(${renderLicenseLink(license)})'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'GNU AGPLv3') {
    return 'https://www.gnu.org/licenses/agpl-3.0'
  }
  if (license === 'GNU GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }
  if (license === 'Mozille Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0'
  }
  if (license === 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT'
  }
  if (license === 'Boost Software License 1.0') {
    return 'https://www.boost.org/LICENSE_1_0.txt'
  }
  if (license === 'The Unlicense') {
    return 'http://unlicense.org/'
  }}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click on the badge.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title 
  ${data.title}

  ## Placeholder for License Badge 

  ## Description
  ${data.description}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contribution)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation 
  To install the necessary dependencies for this project, run the following command(s):
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  This application is licensed under ${data.license}.
  * As this license list was not comprehensive, if you need another license, use the contact information below to ask for license to be added.

  ## Contributors 
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  Please contact me via GitHub or email with any questions, comments, or concerns. 
  GitHub: [ ${data.username}](https://github.com/${data.username})
  Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
