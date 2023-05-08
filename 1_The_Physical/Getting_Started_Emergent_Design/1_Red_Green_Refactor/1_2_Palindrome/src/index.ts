import { reverse } from "dns";

export function palindrome(string: string) {
    const splitString = string.split("")
    const reversedString = (splitString.reverse()).join("")
    return string == reversedString
}