class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  //getter/ get current value of the atta
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  get age() {
    return this._age;
  }
  set age(age) {
    this._age = age;
  }
}

module.exports = Person;
