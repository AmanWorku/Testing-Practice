
const stringLength = require('./functions');
const reverseString = require('./functions');
const Calculator = require('./functions');
const capitalizeString = require('./functions')



test ('return string length', () => {
    expect(stringLength("abe")).toBe(true);
})

test('return reversed string', () => {
    expect(reverseString('hello')).toBe('olleh');
})

test('Capitalization check', () => {
    expect(capitalizeString("alemu")).toBe("Alemu");
})


//
// describe('Calculator', () => {
//     test('addition check', () => {
//         expect(Calculator.addition(5,5)).toBe(10);
//     });
//     test('subtraction check', () => {
//         expect(Calculator.subtraction(5,5)).toBe(0);
//     });
//     test('multiplication check', () => {
//         expect(Calculator.multiplication(5,5)).toBe(25);
//     });
//     test('division check', () => {
//         expect(Calculator.division(5,5)).toBe(1);
//     })
// })
