
import {Coordinator} from './coordinator';

describe('traffic light coordinator', () => {
    let trafficLightCoordinator: Coordinator;

    beforeEach(() => {
        jest.useFakeTimers()
        trafficLightCoordinator = Coordinator.create()
        trafficLightCoordinator.startCycle()
    })

    it('knows that when turned on, a traffic light status should immediately be green', () => {
        expect(trafficLightCoordinator.trafficLight.getCurrentLight()).toBe('green')
    })


    it('knows that given a traffic light is on and is green, after 30 seconds the status should change to yellow', () => {
        jest.advanceTimersByTime(31000)
        trafficLightCoordinator.stopCycle()
        expect(trafficLightCoordinator.trafficLight.getCurrentLight()).toBe('yellow')
    })


    it('knows that given a traffic light is on and is yellow, after 5 seconds the status should change to red', () => {
        jest.advanceTimersByTime(31000)
        expect(trafficLightCoordinator.trafficLight.getCurrentLight()).toBe('yellow')
        jest.advanceTimersByTime(5000)
        trafficLightCoordinator.stopCycle()
        expect(trafficLightCoordinator.trafficLight.getCurrentLight()).toBe('red')
    })

    it('knows that given a traffic light is on and is red, after 30 seconds the status should change to green', () => {
        jest.advanceTimersByTime(65000)
        expect(trafficLightCoordinator.trafficLight.getCurrentLight()).toBe('green')
    })

    it('knows that given a traffic light is on, after 95 seconds the status should be yellow', () => {
        jest.advanceTimersByTime(95000)
        expect(trafficLightCoordinator.trafficLight.getCurrentLight()).toBe('yellow')
    })
})
