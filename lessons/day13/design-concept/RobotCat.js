class RobotCat {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  charge() {
    return "Charging...";
  }
}
//ESModule
module.exports = RobotCat;
