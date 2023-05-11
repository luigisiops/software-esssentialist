export class StatsCalculator{
    private constructor() {

    }

    public getMin(numbers: number[]) {
        return 1
    }

    public static create() {
        return new StatsCalculator()
    }
}