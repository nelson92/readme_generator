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
function renderLicenseBadge(license) {
  if (license === "MIT"){
   return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (license === "ISC"){
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }
  else if (license === "Apache2.0"){
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else {
    return ""
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return '[License: MIT](https://opensource.org/licenses/MIT)'
   }
   else if (license === "ISC"){
    return '[License: ISC](https://opensource.org/licenses/ISC)'
}
else if (license === "Apache2.0"){
  return '[License: Apache2.0](https://opensource.org/licenses/Apache-2.0)'
}
else {
  return ""
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
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [GitHub Username](#GitHub)
* [Questions](#email)

## Installation 
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${data.license}

## Questions
${data.GitHub}

${data.email}



`;

};


module.exports = generateMarkdown;
