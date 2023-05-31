export class TrafficLight {
    private isOn: boolean;

    private constructor() {
        this.isOn = false
    }

    public static create() {
        return new TrafficLight()
    }

    startCycle() {
        this.isOn = true
    }

    getState() {
        return this.isOn
    }

}