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
    return {
        result: true,
        errors:[]
    }
}