// interface IError {
//     type: string,
//     message: string
// }

// export class PasswordValidator {
//     result: boolean
//     errors: IError[]

//     private constructor() {
//         this.result = false
//         this.errors = []
//     }

//     private checkLength(password: string) {
//         if (password.length < 5 || password.length > 15) {
//             this.result = false
//             this.errors.push({
//                 type: 'Invalid Length',
//                 message: 'Password length must be between 5 and 15 characters'
//             })
//         }
//     }

//     private checkHasUpperCase(password: string) {
//         if (password == password.toLowerCase()) {
//             this.result = false
//             this.errors.push({
//                 type: 'No Capital Letter',
//                 message: 'Password needs to have at least 1 capital letter'
//             })
//         }
//     }

//     private checkHasDigit(password: string) {
//         let hasNumber = false
//         const numbers = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
//         for (let i = 0; i < password.length; i++) {
//             const char = password[i]
//             if (numbers.has(char)) {
//                 hasNumber = true
//             }
//         }
//         if (!hasNumber) {
//             this.result = false,
//                 this.errors.push({
//                     type: 'Needs at least 1 Digit',
//                     message: 'Password needs to have at least 1 digit'
//                 })
//         }
//     }

//     public static create() {
//         return new PasswordValidator()
//     }

//     public exec(password: string) {
//         this.checkLength(password)
//         this.checkHasUpperCase(password)
//         this.checkHasDigit(password)

//         return {
//             result: this.result,
//             errors: this.errors
//         }
//     }
// }