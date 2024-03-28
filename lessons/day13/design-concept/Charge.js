class Charge {
  // IS-A Robot Cat
  static charge(robotCatList) {
    robotCatList.forEach((robotCat) => {
      console.log(robotCat.charge());
    });
  }
}

module.exports = Charge;
