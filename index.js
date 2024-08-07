//Import fs, inquirer, and shape classes
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

//creates svg object class with text element and shape element properties
class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }

  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

//prompts user for text of logo, text color, shape of logo, and shape color
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (color keyword or hexadecimal number):',
  },
  {
    type: 'list',
    name: 'shapeType',
    message: 'Choose a shape:',
    choices: ['Circle', 'Square', 'Triangle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (color keyword or hexadecimal number):',
  },
];
//writeToFile function
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log('Generated logo.svg');
  });
}

async function init() {
  const svgFile = './logo.svg';
//uses asynchronous function to await responses to prompts before creating svg file
  const answers = await inquirer.prompt(questions);

  const userText = answers.text;
  const userFontColor = answers.textColor;
  const userShapeColor = answers.shapeColor;
  const userShapeType = answers.shapeType;

  let userShape;
  switch (userShapeType) { 
    case 'Circle':
      userShape = new Circle();
      break;
    case 'Square':
      userShape = new Square();
      break;
    case 'Triangle':
      userShape = new Triangle();
      break;
  }

  userShape.setColor(userShapeColor);
//adds the shape and text elements to new svg instance
  const svg = new Svg();
  svg.setTextElement(userText, userFontColor);
  svg.setShapeElement(userShape);

  const svgString = svg.render();
//uses writeToFile function to save svg content to './logo.svg'
  writeToFile(svgFile, svgString);
}

init();