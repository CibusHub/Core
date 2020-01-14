export class Test {
  constructor(
    private value: string,
  ) {}

  public helloWorld(): string {
    return `Hello world ${this.value}!`;
  }
}
