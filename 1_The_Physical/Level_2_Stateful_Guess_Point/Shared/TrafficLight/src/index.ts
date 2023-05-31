export class TrafficLight {
    private state: boolean;

    private constructor() {
        this.state = false
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

    stopCycle() {
        this.state = false
    }

}