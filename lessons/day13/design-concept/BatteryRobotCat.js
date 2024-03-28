const RobotCat = require("./RobotCat");

// IS -A
class BatteryRobotCat extends RobotCat {
  charge() {
    return super.charge() + " by Battery Robot Cat";
  }
}
module.exports = BatteryRobotCat;