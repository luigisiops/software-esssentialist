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
    return {
        result: true,
        errors:[]
    }
}