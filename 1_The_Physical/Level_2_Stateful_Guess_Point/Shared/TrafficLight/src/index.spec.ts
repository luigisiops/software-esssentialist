// A traffic light can be turned on
// A traffic light will stay on until it is turned off
// When turned on, the traffic light is immediately green
// The light can be turned off any time it’s on
// The traffic light transitions from GREEN to YELLOW
// The traffic light transitions from YELLOW to RED
// The traffic light transitions from RED to GREEN
// At second zero, when it first starts up, the light will stay green until the end of the 30th second
// From second 31 to 35(5 seconds), it'll be yellow
// From second 36 to 60, it's red
// At second 61, the light turns green and the cycle repeats

import {TrafficLight} from './index';

describe('traffic light system', () => {
    let trafficLight: TrafficLight;

    beforeEach(() => {
        jest.useFakeTimers()
        trafficLight = TrafficLight.create()
    })

    it('knows that the traffic light is initially off', () => {
        expect(trafficLight.getState()).toBe(false)
    })

    it('knows that when turned on, a traffic light status should immediately be green', () => {
        expect(trafficLight.getCurrentLight()).toBe('green')
    })

    it('knows that when turned on, and current light is green, calling the next transition should make the light yellow', () => {
        trafficLight.setCurrentLightToNext()
        expect(trafficLight.getCurrentLight()).toBe('yellow')
    })

})
