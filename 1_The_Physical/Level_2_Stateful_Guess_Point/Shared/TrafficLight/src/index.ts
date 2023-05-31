import {IClock} from './clock'

export class TrafficLight {
    private state: boolean;
    private currentLight: string
    private time: number;

    private constructor() {
        this.state = false
        this.currentLight = 'green'
        this.time = 0;
    }

    private async startTime() {
        setInterval(() => {
            this.time += 1
        }, 1000)
    }

    public static create() {
        return new TrafficLight()
    }

    async startCycle() {
        this.state = true
        this.startTime()
        setInterval(() => {
            if (this.time === 30) this.currentLight = 'yellow'
            if (this.time === 35) this.currentLight = 'red'
            if (this.time === 65) {
                this.currentLight = 'green'
                this.time = 0
            }
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
    }

}