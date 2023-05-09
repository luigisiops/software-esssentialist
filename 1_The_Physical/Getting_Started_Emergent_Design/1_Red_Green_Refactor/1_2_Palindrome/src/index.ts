import { reverse } from "dns";

export function palindrome(string: string) {
    string = string.split(" ").join("").toLowerCase()
    const reverseString = string.split("").reverse().join("")
    return string == reverseString
}