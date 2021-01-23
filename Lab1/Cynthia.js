const Person = require("./Person.js");

class Cynthia extends Person {
  constructor(name, colors, bgColors) {
    super(name, colors, bgColors);
  }
}

module.exports = Cynthia;
