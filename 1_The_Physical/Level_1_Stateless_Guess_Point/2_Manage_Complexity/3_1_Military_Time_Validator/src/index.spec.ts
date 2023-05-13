import { TimeValidator } from './index';

interface ITimeValidator {
    exec(time: string): boolean
}

describe('military time validator', () => {
    let timeValidator: ITimeValidator
    beforeAll(() => {
        timeValidator = TimeValidator.create()
    })

    it('knows 01:12 - 14:32 is a valid time range', () => {
        expect(timeValidator.exec('01:12 - 14:32')).toBeTruthy()
    })

    it('knows 25:00 - 12:23 is not a valid time range', () => {
        expect(timeValidator.exec('25:00 - 12:23')).toBeFalsy()
    })

    it('knows 23:00 - 22:65 is not a valid time range', () => {
        expect(timeValidator.exec('23:00 - 22:65')).toBeFalsy()
    })

    it('knows 22:00 - 12:35 is a valid time range, even though it spans to the next day', () => {
        expect(timeValidator.exec('22:00 - 12:35')).toBeTruthy()

    })

    it('knows that 2:00 - 3:12 is not a valid time format', () => {
        expect(timeValidator.exec("2:00 - 3:12")).toBeFalsy()
    })

})
