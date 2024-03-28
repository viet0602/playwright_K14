const RobotCat = require("./RobotCat");

// SolarRobotCat is a Robot cat
class SolarRobotCat extends RobotCat {
  charge() {
    return super.charge() + " Solar power";
  }
}
module.exports = SolarRobotCat;