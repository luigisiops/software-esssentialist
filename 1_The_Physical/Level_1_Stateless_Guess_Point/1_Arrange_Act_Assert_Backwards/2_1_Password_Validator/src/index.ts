export function passwordValidator(password: string) {
    return {
        result: false,
        errors: [
            {type: 'Invalid Length', 
            message: 'Password length must be between 5 and 15 characters'
        }]
    }
}