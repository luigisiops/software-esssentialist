type Error = {
    type: string;
    message: string;
}

export function passwordValidator(password:string){
    let errors:Error[] = [];

    if (checkPasswordLength(password)) {
        errors.push({
            type: 'Invalid Length',
            message: 'Password length must be between 5 and 15 characters'
        })
    }

    if (!checkHasCapitalLetter(password)) {
        errors.push({
            type: 'No Capital Letter',
            message: 'Password needs to have at least 1 capital letter'
        })
    }

    if (!checkHasDigit(password)) {
        errors.push({
            type: 'Needs at least 1 Digit',
            message: 'Password needs to have at least 1 digit'
        })
    }

    return {
        result: errors.length == 0,
        errors: errors
    }
}

function checkPasswordLength(password: string) {
    return password.length < 5 || password.length > 15
}

function checkHasCapitalLetter(password: string) {
    return password != password.toLowerCase()
}

function checkHasDigit(password: string) {
    let hasNumber = false
    const numbers = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
    for (let i = 0; i < password.length; i++) {
        let char = password[i]
        if (numbers.has(char)) {
            hasNumber = true
        }
    }
    return hasNumber
}