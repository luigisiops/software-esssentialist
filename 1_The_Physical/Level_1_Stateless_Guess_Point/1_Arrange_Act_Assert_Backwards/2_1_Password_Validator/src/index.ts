export function passwordValidator(password:string) {
    if (password.length < 5 || password.length > 15) {
        return {
            result: false,
            errors: [
                {type: 'Invalid Length', 
                message: 'Password length must be between 5 and 15 characters'
            }]
        }
    }

    if (password == password.toLowerCase()) {
        return {
            result: false,
            errors: [
                {type: 'No Capital Letter',
                message: 'Password needs to have at least 1 capital letter'
            }]
        }
    }

    let hasNumber = false
    const numbers = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
    for (let i = 0; i<password.length; i++) {
        let char = password[i]
        if (numbers.has(char)){
            hasNumber = true
        }
    }

    if (!hasNumber) {
        return {
            result: false,
            errors: [
                {
                    type: 'Needs at least 1 Digit',
                    message: 'Password needs to have at least 1 digit'
                }]
        }
    }

    return {
        result: true,
        errors:[]
    }
}