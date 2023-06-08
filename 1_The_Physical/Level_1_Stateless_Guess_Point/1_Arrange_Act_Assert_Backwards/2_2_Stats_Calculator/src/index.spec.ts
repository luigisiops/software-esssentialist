/*
# Stats Calculator (#statsCalculator)

> Your task is to process a sequence of integer numbers to determine the following statistics:

> Without using system Math library functions, process a sequence of integers to determine the following statistics:

minimum value
maximum value
number of elements in the sequence
average value

> For example: [2, 4, 21, -8, 53, 40]

minimum value = -8
maximum value = 53
number of elements in the sequence = 6
average value = 18.666666666667
 */
import {StatsCalculator} from './index';

describe('stats calculator', () => {
    let statsCalculator:StatsCalculator;

    beforeAll(() => {
        statsCalculator = StatsCalculator.create()
    })

    describe('should be able to find the minimum value from a given input', () => {
        it('knows 1 is the minimum given [1,2,3,4,5]', () => {
            const minVal = statsCalculator.getStatistics([1, 2, 3, 4, 5]).minVal
            expect(minVal).toBe(1)
        })
        it('knows -8 is the minimum given [-8, 21, -2, 13, 44, 5]', () => {
            const minVal = statsCalculator.getStatistics([-8, 21, -2, 13, 44, 5]).minVal
            expect(minVal).toBe(-8)
        })
        it('returns null for empty input val', () => {
            const minVal = statsCalculator.getStatistics([]).minVal
            expect(minVal).toBe(null)
        })

    })

    describe('should be able to find the maximum value given numbers', () => {
        it('knows 5 is the maximum given [1,2,3,4,5]', () => {
            const maxVal = statsCalculator.getStatistics([1, 2, 3, 4, 5]).maxVal
            expect(maxVal).toBe(5)
        })
        it('knows 0 is the maximum given [-1, -2, -9, 0]', () => {
            const maxVal = statsCalculator.getStatistics([-1, -2, -9, 0]).maxVal
            expect(maxVal).toBe(0)
        })
    })

    describe('should be able to get the number of elements inputted', () => {
        it('knows [1,2,3,4,5,6,7,8,9,0] has 10 elements', () => {
            const numberLength = statsCalculator.getStatistics([1,2,3,4,5,6,7,8,9,0]).numberOfElements
            expect(numberLength).toBe(10)
        })
        it('knows [1] has 1 element', () => {
            const numberLength = statsCalculator.getStatistics([1]).numberOfElements
            expect(numberLength).toBe(1)
        })
        it('knows [] has 0 elements', () => {
            const numberLength = statsCalculator.getStatistics([]).numberOfElements
            expect(numberLength).toBe(0)
        })
    })

    describe('should be able to get the number of elements inputted', () => {
        it('knows [1,2,3,4,5,6,7,8,9,0] has 10 elements', () => {
            const numberLength = statsCalculator.getStatistics([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).numberOfElements
            expect(numberLength).toBe(10)
        })
        it('knows [1] has 1 element', () => {
            const numberLength = statsCalculator.getStatistics([1]).numberOfElements
            expect(numberLength).toBe(1)
        })
        it('knows [] has 0 elements', () => {
            const numberLength = statsCalculator.getStatistics([]).numberOfElements
            expect(numberLength).toBe(0)
        })
    })

    describe('should be able to get the average of the numbers', () => {
        it('knows [1,2,3,4,5] has an average value of 3', () => {
            expect(statsCalculator.getStatistics([1,2,3,4,5]).average).toBe(3)
        })
    })
})