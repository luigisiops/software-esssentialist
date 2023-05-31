export class Clock {
    private seconds: number
    private intervalId: string | number | NodeJS.Timeout | undefined;

    private constructor() {
        this.seconds = 0
        this.intervalId
    }
    public static create() {
        return new Clock()
    }
    getTime() {
        return this.seconds
    }

    startTime() {
        this.intervalId = setInterval(() => {
            this.seconds += 1
        }, 1000)
    }

    stopTime() {
        clearInterval(this.intervalId)
    }
}

export interface IClock {
    getTime(): number,
    startTime(): void,
    stopTime():void
}