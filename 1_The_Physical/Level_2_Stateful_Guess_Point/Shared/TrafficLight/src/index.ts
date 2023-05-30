type lightStates = {
    green: 'green',
    yellow: 'yellow',
    red: 'red',
    off: 'off'
}

export class TrafficLight {
    private state:string
    private cycle:boolean
    private time:number

    private constructor(){
        this.state = 'off'
        this.cycle = true
        this.time = 0;
    }

    getState() {
        return this.state
    }

    getTime() {
        return this.time
    }

    private async startTime() {
        if(!this.cycle) return
        setTimeout(() => {
            this.time += 1
            this.startTime()
        }, 1000)
    }

    async startCycle() {
        this.startTime()
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