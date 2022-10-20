// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   let licenseType = license;
//   let userLicense = " ";
//       if (licenseType === "MIT"){
//         userLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//     } 
//     else if (licenseType === "ISC"){
//       userLicense = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
//     }
//     else if (licenseType === "Apache2.0"){
//       userLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
//     }
//     else if (licenseType === "Other"){
//       userLicense = " "
//     }
//     return userLicense
// }
function renderLicenseBadge(data) {
  if (data.license === "MIT"){
   return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (data.license === "ISC"){
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }
  else if (data.license === "Apache2.0"){
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "MIT"){
    return '[![License: MIT](https://opensource.org/licenses/MIT)'
   }
   else if (data.license === "ISC"){
    return '[![License: ISC](https://opensource.org/licenses/ISC)'
}
else if (data.license === "Apache2.0"){
  return '[![License](https://opensource.org/licenses/Apache-2.0)'
}

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}


## Description 
${data.description}

## Table of Contents   
* [Installation](#installation)
* [Usage](#usage)
* [Description](#description)
* [Contributing](#contributing)
* [Test](#tests)
* [License](#license)
* [GitHub_Question](#github_question)
* [Email_Question](#email_question)

## Installation 
${data.installation}

## Usage
${data.usage}

## Description 
${data.description}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${data.license}

## GitHub Username
${data.github_question}

## Email
${data.email_question}

`;

};


module.exports = generateMarkdown;
