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
        expect(fizzBuzz(9)).toBe('Fizz')
    })

    it('returns Fizz when given a multiple of 3', () => {
        expect(fizzBuzz(33)).toBe('Fizz')
        expect(fizzBuzz(12)).toBe('Fizz')
        expect(fizzBuzz(21)).toBe('Fizz')
    })

    it ('returns Buzz when given multiples of 5' , () => {
        expect(fizzBuzz(5)).toBe('Buzz')
        expect(fizzBuzz(20)).toBe('Buzz')
        expect(fizzBuzz(110)).toBe('Buzz')
    })

    it ('returns FizzBuzz for multiples of 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
        expect(fizzBuzz(30)).toBe('FizzBuzz')
        expect(fizzBuzz(45)).toBe('FizzBuzz')
    })
    it ('returns number as a string for numbers that are not multiples of 3 or 5 or both', () => {
        expect(fizzBuzz(11)).toBe('11')
        expect(fizzBuzz(14)).toBe('14')
    })
});
