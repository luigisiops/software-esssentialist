import {palindrome} from './index';

describe('palindrome checker', () => {
    it('knows that mom is a palindrome', () => {
        expect(palindrome('mom')).toBe(true)
    })

    it('knows dog is not a palindrome', () => {
        expect(palindrome('dog')).toBe(false)
    })

    it('knows racecar is a palindrome', () => {
        expect(palindrome('racecar')).toBe(true)
    })

    it ('knows RaCecAr is a palindrome regardless of casing', () => {
        expect(palindrome('RaCecAr')).toBe(true)
    })

    it('knows that TeStiNg is not a palindrome', () => {
        expect(palindrome('TeStiNg')).toBe(false)
    })

    it('knows  D  og g oD is a palindrome even with spacing', () => {
        expect(palindrome(' D  og g oD')).toBe(true)
    } )
})