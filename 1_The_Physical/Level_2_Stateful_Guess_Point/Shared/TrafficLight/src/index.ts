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

    getState() {
        return this.state
    }

    setCurrentLightToNext() {
        if (this.currentLight === 'green') return this.currentLight = 'yellow'
        if (this.currentLight === 'yellow')return this.currentLight = 'red'
        if (this.currentLight === 'red') return this.currentLight = 'green'
    }

    getCurrentLight() {
        return this.currentLight
    }

}