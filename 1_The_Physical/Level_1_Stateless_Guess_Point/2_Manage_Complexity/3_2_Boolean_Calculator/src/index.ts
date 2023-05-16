export class BooleanCalculator {
    private constructor() {}
    
    public static create() {
        return new BooleanCalculator()
    }

    exec(text: string): boolean{
        const splitText = text.split(" ")
        const splitAnd = text.split(" AND ")
        if (splitAnd.length > 1) return this.exec(splitAnd[0]) && this.exec(splitAnd[1])
        if (splitText[0] === 'NOT') return !(splitText[1] === 'TRUE' ? true : false)
        if (text === 'TRUE') return true
        else return false
    }
}