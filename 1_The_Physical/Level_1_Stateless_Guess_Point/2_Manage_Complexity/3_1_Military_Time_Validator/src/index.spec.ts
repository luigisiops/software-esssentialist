/*
# Military Time Validator (#militaryTimeValidator)

> Write a class (or a function) capable of validating whether a string time range is a valid military time range or not.

> Here are some string examples.

- "01:12 - 14:32" (yes)
- "25:00 - 12:23" (no)
- "22:00 - 23:12" (yes)
*/

import { TimeValidator } from './index';

describe('military time validator', () => {
    it('knows 01:12 - 14:32 is a valid time range', () => {
        const timeValidator = TimeValidator.create()
        expect(timeValidator.exec('01:12 - 14:32')).toBeTruthy()
    })

    it('knows 25:00 - 12:23 is not a valid time range', () => {
        const timeValidator = TimeValidator.create()
        expect(timeValidator.exec('25:00 - 12:23')).toBeFalsy()
    })

    it('knows 23:00 - 22:65 is not a valid time range', () => {
        const timeValidator = TimeValidator.create()
        expect(timeValidator.exec('25:00 - 12:23')).toBeFalsy()
    })
})
