export class TrafficLight {
    private state:string;

    private constructor(){
        this.state = "off"
    }

    getState() {
        return this.state
    }
    startCycle() {
        this.state = "green"
    }
    public static create(){
        return new TrafficLight()
    }
}