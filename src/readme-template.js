generateReadme = response => {
    return `# ${response.title}
</br>
## Description
${response.description}
</br>
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Test](#Test)
* [Screenshot](#screenshot)
* [Deployment](#deployment)
</br>
## Installation
* ${response.install}
</br>
## Usage
${response.usage}
</br>
## Screenshot
![A sample screenshot of a Project](${response.screenshot})
</br>
## License 
${response.license}
</br>
## Badges
${response.badges}
</br>
## Contributors
${response.contributors}
</br>
## Tests
${response.test}
</br>
## Deployment
View the deployed page at [${response.title}](${response.deployment})
</br>

</br>
## Questions?
</br>
Contact Me:
Github: ${response.github}
Email: ${response.email}
`;
}

module.exports = generateReadme;