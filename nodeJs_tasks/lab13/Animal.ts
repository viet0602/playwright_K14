export default class Animal {
  protected name: string;
  protected speed: number;

  constructor(name: string, speed: number) {
    this.name = name;
    this.speed = speed;
  }
  getName(): string {
    return this.name;
  }
  getSpeed(): number {
    return this.speed;
  }
  // Support method
  static generateRandomSpeed(maxSpeed: number): number {
    return Math.floor(Math.random() * maxSpeed) +1 ;
  }
}
