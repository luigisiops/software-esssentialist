export class TimeValidator{
    private constructor(){}

    public static create(){
        return new TimeValidator()
    }

    exec(time:string) {
        return true
    } 

}