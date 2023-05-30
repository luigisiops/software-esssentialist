type lightStates = {
    green: 'green',
    yellow: 'yellow',
    red: 'red',
    off: 'off'
}

export class TrafficLight {
    private state:string
    private cycle:boolean

    private constructor(){
        this.state = 'off'
        this.cycle = true
    }

    getState() {
        return this.state
    }
    async startCycle() {
            this.state = "green"
            setTimeout(() => {
                if (!this.cycle) return
                this.state = 'yellow'
            }, 30000)
            setTimeout(() => {
                if (!this.cycle) return
                this.state = 'red'
            }, 35000)
            setTimeout(() => {
                if (!this.cycle) return
                this.startCycle()
            }, 60000)
        
        return
    }

    stop() {
        this.cycle = false
    }

    public static create(){
        return new TrafficLight()
    }
}