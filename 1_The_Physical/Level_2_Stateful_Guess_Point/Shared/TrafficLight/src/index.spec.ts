
import {TrafficLight} from './index'
describe('Traffic Light States', () => {
    let trafficLight: TrafficLight


    beforeEach(() => {        
        jest.useFakeTimers()
        trafficLight = TrafficLight.create()
        trafficLight.startCycle()
    })    
    describe('Traffic Light Initial State', () => {
        it('knows when a traffic light is off', () => {
            trafficLight = TrafficLight.create()
            expect(trafficLight.getState()).toBe('off')
        })
    })

    it('knows to change state from off to green when a cycle starts', ()=> {
        expect(trafficLight.getState()).toBe('green')
    })

    it('knows that after 30 seconds have passed and the traffic light is on and currently green to switch to yellow', () => {
        jest.advanceTimersByTime(30000)
        expect(trafficLight.getState()).toBe('yellow')
    })

    it ('knows that after 35 seconds have passed and the traffic light was turned on, to switch to red', () => {
        jest.advanceTimersByTime(35000)
        expect(trafficLight.getState()).toBe('red')
    })


})
