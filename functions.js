
function stringLength(string){
    if (string.length > 0 && string.length < 10){
        return true;
    }else
    {
        return ("This is an error");
    }
}

function reverseString(string){
    return string.split("").reverse().join("");
}
//
// class Calculator{
//     static addition(a,b){
//         return a+b;
//     }
//     static subtraction(a,b){
//         return a-b;
//     }
//     static multiplication(a,b){
//         return a*b;
//     }
//     static division(a,b){
//         return a/b;
//     }
// }

function capitalizeString(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}


module.exports = stringLength;
module.exports = reverseString;
module.exports = capitalizeString;
// module.exports = Calculator;
