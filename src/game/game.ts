import { randomIntegerBetween } from "@std/random/integer-between";

export class Game {
  private specialNumber: number = 0;

  constructor() {
    this.specialNumber = randomIntegerBetween(1, 100);
    console.log(`Hey kid, between you and me, the secret number is ${this.specialNumber}`);
  }

  public isGuessCorrect(guess: number) {
    return guess === this.specialNumber;
  }
}
