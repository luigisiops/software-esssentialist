export class BooleanCalculator {
    private constructor() {}
    
    public static create() {
        return new BooleanCalculator()
    }

    exec(text: string) {
        const splitText = text.split(" ")
        if (splitText[0] === 'NOT') return !(splitText[1] === 'TRUE' ? true : false)
        if (text === 'TRUE') return true
        else return false
    }
}