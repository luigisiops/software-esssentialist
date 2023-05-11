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
    describe('should be able to find the minimum value from a given input', () => {
        it('knows 1 is the minimum given [1,2,3,4,5]', () => {
            const statsCalculator = StatsCalculator.create()
            const minVal = statsCalculator.getMin([1, 2, 3, 4, 5])
            expect(minVal).toBe(1)
        })

    })
})