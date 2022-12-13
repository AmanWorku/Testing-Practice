
const stringLength = require('./functions');

const abe = "";
const ans = "This is an error";
test ('return string length', () => {
    expect(stringLength(abe)).toBe(ans);
})