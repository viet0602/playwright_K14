const BatteryRobotCat = require("./BatteryRobotCat");
const Charge = require("./Charge");
const SolarRobotCat = require("./SolarRobotCAt");
// Models
const batteryRobotCat = new BatteryRobotCat();
const solarRobotCat = new SolarRobotCat();

// Usage of controller
Charge.charge([batteryRobotCat, solarRobotCat]);