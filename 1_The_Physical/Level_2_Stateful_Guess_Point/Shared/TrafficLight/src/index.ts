export class TrafficLight {
    private state:string;

    private constructor(){
        this.state = "off"
    }

    getState() {
        return this.state
    }
    async startCycle() {
        this.state = "green"
        jest.useFakeTimers()
        setTimeout(() => {
            this.state = 'yellow'
        }, 30000)
    }

    public static create(){
        return new TrafficLight()
    }
}