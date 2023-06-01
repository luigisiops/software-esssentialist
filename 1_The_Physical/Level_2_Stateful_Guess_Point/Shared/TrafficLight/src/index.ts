import {IClock, Clock} from './clock'

export class TrafficLight {
    private state: boolean;
    private currentLight: string
    private time: number;
    private clock: IClock;
    private cycleId: string | number | NodeJS.Timeout | undefined;

    private constructor() {
        this.state = false
        this.currentLight = 'green'
        this.time = 0;
        this.clock = Clock.create()
        this.cycleId
    }

    public static create() {
        return new TrafficLight()
    }


    startCycle() {
        this.state = true
        this.clock.startTime()
        this.cycleId = setInterval(() => {
            if (this.clock.getTime() === 30) this.currentLight = 'yellow'
            if (this.clock.getTime() === 35) this.currentLight = 'red'
            if (this.clock.getTime() === 65) this.currentLight = 'green'
        }, 1000)
        return 
    }

    getState() {
        return this.state
    }

    getCurrentLight() {
        return this.currentLight
    }

    stopCycle() {
        this.state = false
        clearInterval(this.cycleId)
    }

}