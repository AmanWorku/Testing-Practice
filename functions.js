
function stringLength(string){
    if (string.length > 0 && string.length < 10){
        return true;
    }else
    {
        return ("This is an error");
    }
}

module.exports = stringLength;