//Creates shape class and sets the color of the shape
class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="50%" cy="50%" r="100" height="300px" width="200px" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" height="300px" width="200px" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon height="300px" width="200px" points="0,200 300,200 150,0" fill="${this.color}" />`;
    }
  }
  //exports the shapes so they can be used in other modules
  module.exports = { Circle, Square, Triangle };