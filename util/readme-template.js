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
</br>
### Installation notes:
* ${response.install}
</br>
## Usage
${response.usage}
</br>
## Screenshot
![A sample screenshot of a Project](${response.screenshot})
</br>
## License 
${renderBadge(response.license)}
</br>
## Badges
${response.badges}
</br>
## Contributors
${response.contributors}
</br>
## Deployment
View the deployed page at [${response.title}](${response.deployment})
</br>

</br>
Would you like to reach us?
</br>
Contact Me:
Github: ${response.github}
Email: ${response.email}
`;
}
