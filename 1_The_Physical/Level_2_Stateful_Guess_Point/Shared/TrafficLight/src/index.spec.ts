
import {TrafficLight} from './index'
describe('Traffic Light States', () => {
    let trafficLight: TrafficLight

    beforeEach(() => {
        trafficLight = TrafficLight.create()
    })
    it('knows when a traffic light is off', () => {
        expect(trafficLight.getState()).toBe('off')
    })

    it('knows to change state from off to green when a cycle starts', ()=> {
        trafficLight.startCycle()
        expect(trafficLight.getState()).toBe('green')
    })

    it('knows that after 30 seconds have passed and the traffic light is on and currently green to switch to yellow', () => {
        trafficLight.startCycle()
        jest.advanceTimersByTime(30000)
        expect(trafficLight.getState()).toBe('yellow')
    })

})
