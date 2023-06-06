import { TrafficLight } from "./index";
import { Clock } from "./clock";

export class Coordinator {
    private clock:Clock;
    public trafficLight: TrafficLight;
    private cycleId: string | number | NodeJS.Timeout | undefined;

    private constructor() {
        this.clock = Clock.create()
        this.trafficLight = TrafficLight.create()
    }

    maybeTransitionLight() {
        if (this.clock.getTime() % 65 === 30 || this.clock.getTime() % 65 === 35 || this.clock.getTime() % 65 === 0) {
            this.trafficLight.setCurrentLightToNext()
        }
    }

    startCycle() {
        //this.state = true
        this.clock.startTime()
        this.cycleId = setInterval(() => {
            this.maybeTransitionLight()
        }, 1000)
        return
    }

    stopCycle() {
        clearInterval(this.cycleId)
    }

    public static create() {
        return new Coordinator()
    }


}