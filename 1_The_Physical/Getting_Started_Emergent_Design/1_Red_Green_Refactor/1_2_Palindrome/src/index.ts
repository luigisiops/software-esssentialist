import { reverse } from "dns";

export function palindrome(string: string) {
    string = string.toLowerCase()
    const splitString = string.split("")
    const reversedString = (splitString.reverse()).join("")
    return string == reversedString
}