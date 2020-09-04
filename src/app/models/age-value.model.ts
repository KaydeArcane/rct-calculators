export class AgeValue {
  private id: number;
  private age: string;
  private multiplier: number;
  private classicBonus: number;

  constructor (obj?) {
    if (obj) {
      this.id = obj['id'];
      this.age = obj['age'];
      this.multiplier = obj['multiplier'];
      this.classicBonus = obj['classicBonus'];
    }
  }

  getId = (): number => this.id;
  getAge = (): string => this.age;
  getMultiplier = (): number => this.multiplier;
  getClassicBonus = (): number => this.classicBonus;
}