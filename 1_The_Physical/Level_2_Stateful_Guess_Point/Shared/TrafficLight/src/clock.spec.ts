import {Clock} from './clock'

describe('clock system', () => {
    let clock: Clock;
    beforeEach(() => {
        jest.useFakeTimers()
        clock = Clock.create()
    })
    it('knows that given a clock, the start time should be 0', ()=> {
        expect(clock.getTime()).toEqual(0)
    })

    it('knows that given a clock, and we start the timer, after 10 seconds the current time should be 10', () => {
        clock.startTime()
        jest.advanceTimersByTime(10000)
        expect(clock.getTime()).toEqual(10)
    })

    it('knows that given a clock and we start the timer, if 3 seconds pass and we stop the time for 20 more seconds it should still be at 3', () => {
        clock.startTime()
        jest.advanceTimersByTime(3000)
        clock.stopTime()
        jest.advanceTimersByTime(20000)
        expect(clock.getTime()).toEqual(3)
    })
})