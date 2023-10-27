// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

//pull in node libraries
const inquirer = require('inquirer');
const fs = require('fs');


function writeFile() {
    inquirer
      .prompt([
        // prompt user for initials  && test for user initials
        {
          type: 'input',
          message: 'What are the initials for your logo?',
          name: 'logoInitials',
        },
        // prompt user for text color name or hex  && test for color input
        {
            type: 'input',
            message: 'What color would you like your text to be? (note you can enter either the hex code or the actual color name)',
            name: 'logoTextColor',
          },
        // prompt user for shape circle, triangle or square  && test for shape input
        {
        type: 'list',
        message: 'What shape do you want for your logo background?',
        name: 'logoShape',
        choices: ['Circle', 'Square', 'Triangle']
        },
        // prompt for shape color name or hex  && test for shape color
        {
        type: 'input',
        message: 'What color do you want your shape to be? (note you can enter either the hex code or the actual color name)',
        name: 'logoShapeColor',
        },
      ])
      .then((response) => {
        console.log(response.logoInitials);
        console.log(response.logoTextColor);
        console.log(response.logoShape);
        console.log(response.logoShapeColor);
        
        // writes to the new file
        // fs.writeFile('READMEGEN.md', `${userName}`, (err) =>
        // err ? console.error(err) : console.log('README logged!')
        // );
       });
    }
    writeFile();
    





// prompt for shape color name or hex  && test for shape color

// gen svg file need loop for shape and then varialbes for options

// file name should be logo.svg and will open in a browser  match criteria, selections and 300x200 rqmt
