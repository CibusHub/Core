export class Test {
  constructor(
    private value: string
  ) {}

  helloWorld(): string {
    return `Hello world ${this.value}!`;
  }
}
