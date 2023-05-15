export class TimeValidator{
    private constructor(){}

    public static create(){
        return new TimeValidator()
    }

    exec(time:string) {
        const timeStringFormatLength = 13;
        if (time.length != timeStringFormatLength) return false

        const [startTime, endTime] = time.split(" - ")
        if (!startTime.includes(":") || !endTime.includes(":")) return false
        
        const [startHours, startMinutes] = this.splitHoursAndMinutes(startTime)
        const [endHours, endMinutes] = this.splitHoursAndMinutes(endTime)
        if (startHours > 24 || endHours > 24 || startMinutes > 59 || endMinutes > 59) return false
        
        return true
    } 

    splitHoursAndMinutes(text: string) {
        return text.split(":").map((val) => parseInt(val))
    }

}