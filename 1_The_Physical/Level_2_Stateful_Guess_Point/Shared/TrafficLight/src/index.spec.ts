
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

    
    it('knows that after 60 seconds have passed and the traffic light was turned on, to switch to green from red', () => {
        jest.advanceTimersByTime(60000)
        expect(trafficLight.getState()).toBe('green')
    })

    it('knows that given a cycle is started and the traffic light is turned off on yellow, 10 seconds later it should still be yellow', () => {
        jest.advanceTimersByTime(30000)
        trafficLight.stop()
        jest.advanceTimersByTime(10000)
        expect(trafficLight.getState()).toBe('yellow')
    })

    it('knows that given a cycle has started and 10 seconds has passed. If the cycle is stopped, time should still be at 10 seconds', () => {
        jest.advanceTimersByTime(10000)
        trafficLight.stop()
        expect(trafficLight.getTime()).toBe(10)
    })
})
