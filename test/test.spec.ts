import { expect } from 'chai';
import { Test } from '../src/test';

describe('Test', () => {
  it('initializes with argument', () => {
    const tst = new Test('Test');
    expect(tst).to.be.an('object');
  });

  it('helloWorld returns with constructed argument', async () => {
    const tst = new Test('Test');
    expect(tst.helloWorld()).to.equal('Hello world Test!');
  });
});
