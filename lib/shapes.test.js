const { Circle, Square, Triangle } = require("./shapes");

// Circle test
describe('Circle', () => {
  test('renders correctly', () => {
    const shape = new Circle();
    const color = 'blue';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="300px" width="200px" fill="${color}" />`);
  });
});

// Square test
describe('Square', () => {
  test('renders correctly', () => {
    const shape = new Square();
    const color = 'green';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="50" height="300px" width="200px" fill="${color}" />`);
  });
});

// Triangle test
describe('Triangle', () => {
  test('renders correctly', () => {
    const shape = new Triangle();
    const color = 'pink';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon height="300px" width="200px" points="0,200 300,200 150,0" fill="${color}" />`);
  });
});
