class Robot {

    //static variable - is a shared value belongs to class, NOT object
    static id = 0;
    constructor(){
        //this._id = Robot.id++;
        Robot.id++;
    }
    getId(){
        return Robot.id;
    }

    // static method belong to Class not object
    static doSthing(){
        console.log('doing something');
    }

}
module.exports = Robot;