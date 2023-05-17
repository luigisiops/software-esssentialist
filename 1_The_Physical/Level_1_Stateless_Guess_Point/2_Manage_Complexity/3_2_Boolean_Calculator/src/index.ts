export class BooleanCalculator {
    private constructor() {}
    
    public static create() {
        return new BooleanCalculator()
    }

    exec(text: string): boolean{
        let i = 0
        const splitText = text.split(" ")
        while (splitText[i] == "TRUE" || splitText[i] == "FALSE") {
            i++
        }
        
        if(splitText[i] === "AND" || splitText[i] === "OR"){
            let left = splitText.slice(0, i).join(" ")
            let right = splitText.slice(i+1, splitText.length).join(" ")
            if (text[i] === "AND") return this.exec(left) && this.exec(right)
            else return this.exec(left) || this.exec(right)
        }
    
        if (splitText[0] === 'NOT') return !(splitText[1] === 'TRUE' ? true : false)
        if (text === 'TRUE') return true
        else return false
    }
}