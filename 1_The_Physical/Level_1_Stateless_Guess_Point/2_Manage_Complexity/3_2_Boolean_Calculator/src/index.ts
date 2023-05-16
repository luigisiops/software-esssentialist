export class BooleanCalculator {
    private constructor() {}
    
    public static create() {
        return new BooleanCalculator()
    }

    exec(text: string): boolean{
        let left
        let right
        if (text.split(" AND ").length > 1) {
            [left, right] = text.split(" AND ")
            return this.exec(left) && this.exec(right)
        }
        if (text.split(" OR ").length > 1) {
            [left, right] = text.split(" OR ")
            return this.exec(left) || this.exec(right)
        }

        const splitText = text.split(" ")
        if (splitText[0] === 'NOT') return !(splitText[1] === 'TRUE' ? true : false)
        if (text === 'TRUE') return true
        else return false
    }
}