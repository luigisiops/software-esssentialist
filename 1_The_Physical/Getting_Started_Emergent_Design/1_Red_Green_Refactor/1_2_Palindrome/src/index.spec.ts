import {palindrome} from './index';

describe('palindrome checker', () => {
    it('knows that mom is a palindrome', () => {
        expect(palindrome('mom')).toBe(true)
    })
})