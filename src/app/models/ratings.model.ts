export class Ratings {
  private e: number;
  private i: number;
  private n: number;

  constructor (obj?) {
    if (obj) {
      this.e = obj['e'];
      this.i = obj['i'];
      this.n = obj['n'];
    }
  }

  getE = (): number => this.e;
  getI = (): number => this.i;
  getN = (): number => this.n;
}