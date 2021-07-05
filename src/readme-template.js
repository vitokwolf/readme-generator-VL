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
    if (!sectionText || sectionText === 'None') {
        return '';
    }
    else if (sectionText === 'MIT') {
        return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }
    else if (sectionText === 'Apache-2.0') {
        return `
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }
    else if (sectionText === 'Creative Commons 1.0') {
        return `
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    }
    else if (sectionText === 'GPLv3') {
        return `
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    }
    else {
        return `
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
    }
};

// Badges
const generateBadges = sectionText => {
    if (!sectionText) {
        return '';
    };
    return `![badges](${sectionText})
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
${generateLicense(License)} ${generateBadges(Badges)}
___
## Description
${theRest.description}
___
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Test](#test)
* [Contributing](#contributing)
* [License](#license)
* [Deployment](#deployment)
* [Questions?](#questions)
___
## Demo
![${theRest.altScreenshotInput}](${theRest.screenshot})
${generateInstall(Install)}
${generateUsage(Usage)}
${generateTest(Tests)}
${generateContibutor(Contributors)}
___
## License
[${License}](https://choosealicense.com/licenses/)
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