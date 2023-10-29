
//pull in node libraries
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');


// function that will call to the shape.js and ultimately write the file
function writeFile() {
    inquirer
      .prompt([
        // prompt user for initials  && test for user initials
        {
          type: 'input',
          message: 'What are the initials for your logo?',
          name: 'logoText',
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
        const userResponse = response;
        module.exports = userResponse;
        console.log(userResponse);
        shapes.userOutput();
    });
}
    writeFile();
    





// prompt for shape color name or hex  && test for shape color

// gen svg file need loop for shape and then varialbes for options

// file name should be logo.svg and will open in a browser  match criteria, selections and 300x200 rqmt
