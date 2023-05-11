export class StatsCalculator{
    private constructor() {}

    public getStatistics(numbers: number[]) {
        if (numbers.length === 0) {
            return {minVal: null, maxVal: null, numberOfElements: 0, average: null}
        }
        
        let minVal = numbers[0]
        let maxVal = numbers[0]
        let summation = 0
        const numberOfElements = numbers.length

        for (let i = 0; i<numbers.length; i++) {
            const currVal = numbers[i]
            if(currVal > maxVal) maxVal = currVal
            if(currVal < minVal) minVal = minVal
            summation += currVal
        }

        return {
            minVal,
            maxVal,
            numberOfElements,
            average: summation/numberOfElements
        }
    }

    public static create() {
        return new StatsCalculator()
    }
}