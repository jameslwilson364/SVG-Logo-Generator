const fs = require('fs');

class Circle {
        constructor(logoShape, logoText, logoTextColor, logoShapeColor) {
            this.logoShape = 'Circle';
            this.logoText = logoText;
            this.logoTextColor = logoTextColor;
            this.logoShapeColor = logoShapeColor;
        }
    }
class Square {
        constructor(logoShape, logoText, logoTextColor, logoShapeColor) {
            this.logoShape = 'Square';
            this.logoText = logoText;
            this.logoTextColor = logoTextColor;
            this.logoShapeColor = logoShapeColor;
        }
    }
class Triangle {
        constructor(logoShape, logoText, logoTextColor, logoShapeColor) {
            this.logoShape = 'Triangle';
            this.logoText = logoText;
            this.logoTextColor = logoTextColor;
            this.logoShapeColor = logoShapeColor;
        }
    }

function userOutput() {
    const userResponse = require('../index.js');
    console.log(userResponse);
    const currentShape = (userResponse.logoShape);
    console.log(currentShape);
    const currentText = (userResponse.logoText);
    console.log(currentText);
    const currentTextColor = (userResponse.logoTextColor);
    console.log(currentTextColor);
    const currentShapeColor = (userResponse.logoShapeColor);   
    console.log(currentShapeColor);

    
    if (currentShape == 'Circle') {
        const userInput = new Circle('Circle', currentText, currentTextColor, currentShapeColor);
        console.log(userInput);
        const yourLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${userInput.logoShapeColor}" />
        
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${userInput.logoTextColor}">${userInput.logoText}</text>
        
            </svg>`;
            
        // writes to the new file
        fs.writeFile('./examples/CircleLogo.svg', `${yourLogo}`, (err) =>
        err ? console.error(err) : console.log('File Created!')
        );
    } else if (currentShape == 'Square') {
        const userInput = new Square('Square', currentText, currentTextColor, currentShapeColor);
        console.log(userInput);            
        const yourLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect x="25" y="50" width="200" height="200" fill="${userInput.logoShapeColor}" />
        
            <text x="125" y="150" font-size="60" text-anchor="middle" fill="${userInput.logoTextColor}">${userInput.logoText}</text>
        
            </svg>`;
                    
        // writes to the new file
        fs.writeFile('./examples/SquareLogo.svg', `${yourLogo}`, (err) =>
        err ? console.error(err) : console.log('File Created!')
        );
    } else if (currentShape == 'Triangle') {
        const userInput = new Triangle('Triangle', currentText, currentTextColor, currentShapeColor);
        console.log(userInput);    
            const yourLogo = `<svg version="1.1" fill="${userInput.logoShapeColor}" width="300px" height="200px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
            <path d="M21.9,19.3l-9-15.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.5-0.3-1.1-0.2-1.4,
            0.3l-9,15.6C2,19.4,2,19.6,2,19.8c0,0.6,0.4,1,1,1h18c0.2,0,0.3,0,0.5-0.1C22,20.4,22.1,19.8,21.9,19.3z"/>
            <text x="12.1" y="18" font-size="8" text-anchor="middle" fill="${userInput.logoTextColor}">${userInput.logoText}</text>
            </svg>`;
            
        // writes to the new file
        fs.writeFile('./examples/TriangleLogo.svg', `${yourLogo}`, (err) =>
        err ? console.error(err) : console.log('File Created!')
        );
    }
} 


module.exports = {userOutput};
// module.exports = Circle;
// module.exports = Square;
// module.exports = Triangle;

