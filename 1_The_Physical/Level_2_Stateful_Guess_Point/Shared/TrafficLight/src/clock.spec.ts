import {Clock} from './clock'

describe('clock system', () => {
    it('knows that given a clock, the start time should be 0', ()=> {
        const clock = Clock.create()
        expect(clock.getTime()).toEqual(0)
    })

    it('knows that given a clock, and we start the timer, after 10 seconds the current time should be 10', () => {
        jest.useFakeTimers()
        const clock = Clock.create()
        clock.startTime()
        jest.advanceTimersByTime(10000)
        expect(clock.getTime()).toEqual(10)
    })
})