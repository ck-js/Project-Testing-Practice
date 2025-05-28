import {calculator } from '../calculator';

test('adds1 to 2 to equal 3', () => {
expect(calculator.add(1,2)).toBe(3);

})
test('subtracts 1 from 2 to equal 1', () => {
expect(calculator.subtract(2,1)).toBe(1);

})
test('multiplies 1 by 2 to equal 2', () => {
expect(calculator.multiply(1,2)).toBe(2);

})
test('divides 9 by 3 to equal 3', () => {
expect(calculator.divide(9,3)).toBe(3);

})