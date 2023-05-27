// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ( license === 'MIT') {
    return 'MIT License Badge';
  } else if (license === 'Apache') {
    return 'Apache License Badge';
  } else if ( license === 'GPL') {
    return 'GPL License Badge';
  } else if ( license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ( license === 'MIT') {
    return 'MIT License Link';
  } else if (license === 'Apache') {
    return 'Apache License Link';
  } else if ( license === 'GPL') {
    return 'GPL License Link';
  } else if ( license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.install}

  ## License
  ${data.license}

  Github Username
  ${data.username}

`;
}

module.exports = generateMarkdown;
