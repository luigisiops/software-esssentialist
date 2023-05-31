export class TrafficLight {
    private state: boolean;
    private currentLight: string

    private constructor() {
        this.state = false
        this.currentLight = 'green'
    }

    public static create() {
        return new TrafficLight()
    }

    startCycle() {
        this.state = true
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