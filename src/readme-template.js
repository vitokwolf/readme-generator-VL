// create a function for each section to populate the data only if there is any input provided

// Installation
const generateInstall = sectionText => {
    if (!sectionText) {
        return '';
    };
    return `
___
## Installation
${sectionText}
`;
};

// Usage
const generateUsage = sectionText => {
    if (!sectionText) {
        return '';
    };
    return `
___
## Usage
${sectionText}
`;
}; 

// License
const generateLicense = sectionText => {
    if (!sectionText) {
        return '';
    };
    return `
___
## License
${sectionText}
`;
}; 

// Badges
const generateBadges = sectionText => {
    if (!sectionText) {
        return '';
    };
    return `
___
## Badges
${sectionText}
`;
}; 

// Contributions
const generateContibutor = sectionText => {
    if (!sectionText) {
        return '';
    };
    return `
___
## Contributing
${sectionText}
`;
}; 

// Tests
const generateTest = sectionText => {
    if (!sectionText) {
        return '';
    };
    return `
___
## Tests
${sectionText}
`;
};

// export template markdown file
module.exports = templateData => {
    // destructure data by sections
    const { Install, Usage, License, Badges, Contributors, Tests, ...theRest } = templateData;
    return `
# ${theRest.title}

## Description
${theRest.description}
___
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contributing)
* [Test](#test)
* [Demo](#demo)
* [Deployment](#deployment)
* [Questions?](#questions)
${generateInstall(Install)}
${generateUsage(Usage)}
${generateLicense(License)}
${generateBadges(Badges)}
${generateContibutor(Contributors)}
${generateTest(Tests)}
___
## Demo
![${theRest.altScreenshotInput}](${theRest.screenshot})
___
## Deployment
View the deployed page at : ${theRest.deployment}
___
## Questions?
Contact Me:
* Github: https://github.com/${theRest.github}/${theRest.title}
* Email: ${theRest.email}
`;
};