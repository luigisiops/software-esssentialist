/*

> Write a function that takes numbers from 1 to 100 and outputs them as a string, 
but for multiples of three it returns “Fizz” instead of the number, and for 
multiples of five it returns “Buzz.” For numbers that are multiples of both three 
and five, it returns “FizzBuzz.”


*/
import {fizzBuzz} from './fizzbuzz';

describe("fizzbuzz", () => {
    it('returns fizz when given 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    })

    it('returns Fizz when given a multiple of 3', () => {
        expect(fizzBuzz(33)).toBe('Fizz')
    })

    it ('returns Buzz when given multiples of 5' , () => {
        expect(fizzBuzz(5)).toBe('Buzz')
    })
});
