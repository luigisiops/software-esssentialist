export class BooleanCalculator {
    private constructor() {}
    
    public static create() {
        return new BooleanCalculator()
    }

    exec(text: string) {
        if (text === 'TRUE') return true
        else return false
    }
}