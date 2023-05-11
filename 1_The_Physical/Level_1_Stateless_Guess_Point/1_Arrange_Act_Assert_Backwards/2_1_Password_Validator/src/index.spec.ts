/*
> Write a function (or a class) for validating passwords. 
Passwords must meet the following criteria: 

> Between 5 and 15 characters long
> Contains at least one digit
> Contains at least one upper case letter
> Return an object containing a boolean result and an errors key that — when 
  provided with an invalid password — contains an error message or type for all 
  errors in occurrence. There can be multiple errors at a single time.
*/

import {passwordValidator} from './index';

describe('password validator', () => {
  describe('A valid password must be between 5 and 15 characters long', () => {
    it('knows that Dog1, C2, and mom are too short of a password', () => {
      ['Dog1', 'C2', 'mom'].map((multiple) => passwordValidator(multiple))
      .forEach((resultObject) =>{
        expect(resultObject.result).toBeFalsy()
        expect(resultObject.errors[0].type).toEqual('Invalid Length')
        expect(resultObject.errors[0].message).toContain('5 and 15')
      }
      )
      const shortPasswordObject = passwordValidator('Dog1')
      expect(shortPasswordObject.result).toBeFalsy()
      expect(shortPasswordObject.errors[0].type).toEqual('Invalid Length')
      expect(shortPasswordObject.errors[0].message).toContain('5 and 15')
    })

    it('knows that Somelongpassword123 is a too long for a password', () => {
      const longPasswordObject = passwordValidator('somelongpassword123') 
      expect(longPasswordObject.result).toBeFalsy()
      expect(longPasswordObject.errors[0].type).toEqual('Invalid Length')
      expect(longPasswordObject.errors[0].message).toContain('5 and 15')    
    })

    it('knows that Password1 is a valid password length', () => {
      const returnObject = passwordValidator('Password1')
      expect(returnObject.result).toBeTruthy()
      expect(returnObject.errors.length).toEqual(0)
    })
  })

  describe('A valid password must have at least 1 capital letter', () => {
    it('knows that password: password does not have 1 capital letter', () => {
      const failResponse = passwordValidator('password')
      expect(failResponse.result).toBeFalsy()
      expect(failResponse.errors[0].type).toEqual('No Capital Letter')
      expect(failResponse.errors[0].message).toContain('1 capital letter')
    })

    it('knows that ThisWorks12 is a valid password', () => {
      const successResponse = passwordValidator('ThisWorks12')
      expect(successResponse.result).toBeTruthy()
      expect(successResponse.errors.length).toEqual(0)
    })

    it('knows that 1234567890 is not a valid password', () => {
      const allDigitsResponse = passwordValidator('1234567890')
      expect(allDigitsResponse.result).toBeFalsy()
      expect(allDigitsResponse.errors[0].type).toEqual('No Capital Letter')
      expect(allDigitsResponse.errors[0].message).toContain('1 capital letter')
    })
  })

  describe('A valid password must have at least 1 digit', () => {
    it('knows that SecurePass is not a valid password', () => {
      const failResponse = passwordValidator('SecurePass')
      expect(failResponse.result).toBeFalsy()
      expect(failResponse.errors[0].type).toEqual('Needs at least 1 Digit')
      expect(failResponse.errors[0].message).toContain('1 digit')  
    })

    it('knows that SecurePass1 is a valid password', ()=> {
      const successResponse = passwordValidator('SecurePass1')
      expect(successResponse.result).toBeTruthy()
      expect(successResponse.errors.length).toEqual(0)
    })
  })
  
  it('should throw all three error messages given password: dog', () => {
    const responseObject = passwordValidator('dog')

    expect(responseObject.result).toBeFalsy()
    expect(responseObject.errors.length).toEqual(3)

    expect(responseObject.errors[0].type).toEqual('Invalid Length')
    expect(responseObject.errors[0].message).toContain('5 and 15')

    expect(responseObject.errors[1].type).toEqual('No Capital Letter')
    expect(responseObject.errors[1].message).toContain('1 capital letter')

    expect(responseObject.errors[2].type).toEqual('Needs at least 1 Digit')
    expect(responseObject.errors[2].message).toContain('1 digit')  
  })


})


