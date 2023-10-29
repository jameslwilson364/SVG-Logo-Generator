const shapes = require('./shapes.js');


describe("Circle Class", () => {
    describe("UserOutput", () => {
        it("should return a check on logoShape", () => {
            // arrange
            const expected = 'Circle';
            class Circle {
                constructor(logoShape, logoText, logoTextColor, logoShapeColor) {
                    this.logoShape = logoShape;
                    this.logoText = logoText;
                    this.logoTextColor = logoTextColor;
                    this.logoShapeColor = logoShapeColor;
                }
            }
            // act
            const circleNew = new Circle('pentagram', 'jlw', 'white', 'black');
            const result = circleNew.logoShape;
            // assert
            expect(result).toEqual(expected);
        });
    });
});


describe("Square Class", () => {
    describe("UserOutput", () => {
        it("should return a check on logoShape", () => {
            // arrange
            const expected = 'Square';
            class Square {
                constructor(logoShape, logoText, logoTextColor, logoShapeColor) {
                    this.logoShape = logoShape;
                    this.logoText = logoText;
                    this.logoTextColor = logoTextColor;
                    this.logoShapeColor = logoShapeColor;
                }
            }
            // act
            const squareNew = new Square('Square', 'jlw', 'white', 'black');
            const result = squareNew.logoShape;
            // assert
            expect(result).toEqual(expected);
        });
    });
});

describe("Triangle Class", () => {
    describe("UserOutput", () => {
        it("should return a check on logoShape", () => {
            // arrange
            const expected = 'Triangle';
            class Triangle {
                constructor(logoShape, logoText, logoTextColor, logoShapeColor) {
                    this.logoShape = logoShape;
                    this.logoText = logoText;
                    this.logoTextColor = logoTextColor;
                    this.logoShapeColor = logoShapeColor;
                }
            }
            // act
            const triNew = new Triangle('Triangle', 'jlw', 'white', 'black');
            const result = triNew.logoShape;
            // assert
            expect(result).toEqual(expected);
        });
    });
});