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
  it('throws error when password is not between 5 and 15 characters long', () => {
    const shortPasswordObject = passwordValidator('dog1')
    const longPasswordObject = passwordValidator('somelongpassword123')    
    const returnObject = passwordValidator('Password1')
    expect(shortPasswordObject.result).toBeFalsy()
    expect(shortPasswordObject.errors[0].type).toEqual('Invalid Length')
    expect(shortPasswordObject.errors[0].message).toContain('5 and 15')

    expect(longPasswordObject.result).toBeFalsy()
    expect(longPasswordObject.errors[0].type).toEqual('Invalid Length')
    expect(longPasswordObject.errors[0].message).toContain('5 and 15') 
    
    expect(returnObject.result).toBeTruthy()
    expect(returnObject.errors.length).toEqual(0)
  })


  test('that password has at least 1 capital letter', () => {
    const failResponse = passwordValidator('password')
    const successResponse = passwordValidator('ThisWorks12')
    const allDigitsResponse = passwordValidator('1234567890')
    expect(failResponse.result).toBeFalsy()
    expect(failResponse.errors[0].type).toEqual('No Capital Letter')
    expect(failResponse.errors[0].message).toContain('1 capital letter')

    expect(successResponse.result).toBeTruthy()
    expect(successResponse.errors.length).toEqual(0)

    expect(allDigitsResponse.result).toBeFalsy()
    expect(allDigitsResponse.errors[0].type).toEqual('No Capital Letter')
    expect(allDigitsResponse.errors[0].message).toContain('1 capital letter')
  })
  
  test('that password has at least 1 digit', () => {
    const failResponse = passwordValidator('SecurePass')
    const successResponse = passwordValidator('SecurePass1')

    expect(failResponse.result).toBeFalsy()
    expect(failResponse.errors[0].type).toEqual('Needs at least 1 Digit')
    expect(failResponse.errors[0].message).toContain('1 digit')  

    expect(successResponse.result).toBeTruthy()
    expect(successResponse.errors.length).toEqual(0)

  })


})


