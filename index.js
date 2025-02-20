function validatePassword(pass1, pass2){
    if (pass1 !== pass2){ //to check if the two passwords are matched
        return false;
    }

    if (pass1.length < 8){ //to check if password has at least 8 characters
        return false;
    }

    let hasNum = false;
    let hasUpper = false;
    let hasLower = false;

    //for checking
    for (let i = 0; i < pass1.length; i++){
        const char = pass1[i];
        if (char >= '0' && char <= '9') {
            return true;
        } else if (char >= 'A' && char <= 'Z'){
            return true;
        } else if (char >= 'a' && char <= 'z'){
            return true;
        }
    }

    return hasNum && hasUpper && hasLower;
}

function reversePassword(password){
    let reverse = '';
    for (let i = password.length-1; i >= 0; i--){
        reverse += password[i];
    }
    return reverse;
}

function storePassword(name, pass1, pass2) {
    /*an object containing user's name and new password*/
    const newpassword = validatePassword(pass1, pass2) ? reversePassword(pass1) : pass1 //if valid, assign the reversed version. If not, assign the prev password to new password
    return {
        name: name,
        newpassword: newpassword
    };
}

/*Sample outputs*/
console.log(storePassword("John","Pass1234","Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));



