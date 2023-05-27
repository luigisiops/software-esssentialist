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
        setTimeout(() => {
            this.state = 'yellow'
        }, 30000)
        setTimeout(() => {
            this.state = 'red'
        }, 35000)
        setTimeout(() => {
            this.startCycle()
        },60000)
    }

    public static create(){
        return new TrafficLight()
    }
}