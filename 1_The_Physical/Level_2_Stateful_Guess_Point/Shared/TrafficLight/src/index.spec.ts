
import {TrafficLight} from './index'
describe('Traffic Light States', () => {
    it('knows when a traffic light is off', () => {
        const trafficLight = TrafficLight.create()
        expect(trafficLight.getState()).toBe('off')
    })

    it('knows to change state from off to green when a cycle starts', ()=> {
        let trafficLight = TrafficLight.create()
        trafficLight.startCycle()
        expect(trafficLight.getState()).toBe('green')
    })

    it('knows that after 30 seconds have passed and the traffic light is on and currently green to switch to yellow', () => {
        let trafficLight = TrafficLight.create()
        trafficLight.startCycle()
        jest.advanceTimersByTime(30000)
        expect(trafficLight.getState()).toBe('yellow')
    })

})
