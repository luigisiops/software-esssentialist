
import {TrafficLight} from './index'
describe('Traffic Light States', () => {
    it('knows when a traffic light is off', () => {
        const trafficLight = TrafficLight.create()
        expect(trafficLight.getState()).toBe('off')
    })
})
