
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
})
