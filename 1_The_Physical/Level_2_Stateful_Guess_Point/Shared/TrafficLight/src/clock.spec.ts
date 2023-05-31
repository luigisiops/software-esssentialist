import {Clock} from './clock'

describe('clock system', () => {
    it('knows that given a clock, the start time should be 0', ()=> {
        const clock = Clock.create()
        expect(clock.getTime()).toEqual(0)
    })
})