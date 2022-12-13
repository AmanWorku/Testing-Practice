
const stringLength = require('./functions');
const reverseString = require('./functions');

const abe = "abebe";
const ans = "This is an error";
//
// test ('return string length', () => {
//     expect(stringLength(abe)).toBe(ans);
// })

test('return reversed string', () => {
    expect(reverseString(abe)).toBe('ebeba');
})