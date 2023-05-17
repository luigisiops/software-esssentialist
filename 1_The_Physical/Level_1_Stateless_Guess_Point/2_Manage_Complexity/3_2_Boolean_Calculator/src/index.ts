export class BooleanCalculator {
    private constructor() {}
    
    public static create() {
        return new BooleanCalculator()
    }

    exec(text: string): boolean{
        let i = 0
        let length = text.length
        if (text[0] == "(" && text[length-1] == ")"){
            text = text.slice(1, text.length-1)
        }
        let splitText = text.split(" ")
        while (splitText[i] == "TRUE" || splitText[i] == "FALSE") {
            i++
        }
        
        if(splitText[i] === "AND" || splitText[i] === "OR"){
            let left = splitText.slice(0, i).join(" ")
            let right = splitText.slice(i+1, splitText.length).join(" ")
            if (splitText[i] === "AND") return this.exec(left) && this.exec(right)
            else return this.exec(left) || this.exec(right)
        }
    
        if (splitText[0] === 'NOT') {
            let right = splitText.slice(1, length)
            return !(this.exec(right.join(" ")))}
        if (text === 'TRUE') return true
        else return false
    }
}