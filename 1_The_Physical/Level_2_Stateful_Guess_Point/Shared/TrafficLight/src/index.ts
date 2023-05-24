export class TrafficLight {
    private state:string;

    private constructor(){
        this.state = "off"
    }

    getState() {
        return this.state
    }
    public static create(){
        return new TrafficLight()
    }
}