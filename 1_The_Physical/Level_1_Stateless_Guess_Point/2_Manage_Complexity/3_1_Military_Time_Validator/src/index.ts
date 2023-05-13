export class TimeValidator{
    private constructor(){}

    public static create(){
        return new TimeValidator()
    }

    exec(time:string) {
        const timeStringFormatLength = 13;
        if (time.length != timeStringFormatLength) {
            return false
        }

        const [startTime, endTime] = time.split(" - ")
        const [startHours, startMinutes] = startTime.split(":").map((val) => parseInt(val))
        const [endHours, endMinutes] = endTime.split(":").map((val) => parseInt(val) )

        if (startHours > 24 || endHours > 24 || startMinutes > 59 || endMinutes > 59) {
            return false
        }

        return true
    } 

}