export class BooleanCalculator {
    private constructor() {}
    
    public static create() {
        return new BooleanCalculator()
    }

    removeParentheses(text: string) {
        let length = text.length
        if (text[0] == "(" && text[length - 1] == ")") {
            return text.slice(1, text.length - 1)
        }
        return text
    }

    exec(text: string): boolean{
        if (text === 'TRUE') return true
        if (text ==='FALSE') return false
        
        let textWithoutParentheses = this.removeParentheses(text)
        let splitText = textWithoutParentheses.split(" ")
        
        let i = 0
        while (splitText[i] == "TRUE" || splitText[i] == "FALSE") {
            i++
        }

        let left = splitText.slice(0, i).join(" ")
        let right = splitText.slice(i + 1, splitText.length).join(" ")

        if (splitText[0] === 'NOT') return !(this.exec(right))
        if (splitText[i] === "AND") return this.exec(left) && this.exec(right)
        if(splitText[i] === "OR") return this.exec(left) || this.exec(right)
        return false
    }
}