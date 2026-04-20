"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeToSentence = exports.isPalindrome = exports.countVowels = void 0;
const R = require("ramda");
const stringToArray = R.split("");
/* Question 2.1 */
const vowels = ['a', 'e', 'i', 'o', 'u'];
exports.countVowels = R.pipe(R.toLower, // make the string lowercase to count uppercase vowels as well
stringToArray, // split the string into an array of characters
R.filter((char) => vowels.includes(char)), // filter the array to include only vowels
R.length // return the length of the filtered array, which is the count of vowels in the string
);
/* Question 2.2 */
const isPalindrome = (text) => {
    const cleanedText = R.pipe(R.toLower, // replace uppercase letters with lowercase
    R.replace(/[^a-z0-9]/g, ""))(text); // replcaing all non-alphanumeric characters with an empty string
    const checkPalindrome = (chars) => {
        if (chars.length <= 1)
            return true;
        if (R.head(chars) !== R.last(chars))
            return false;
        return checkPalindrome(R.slice(1, -1, chars));
    };
    return checkPalindrome(R.split("", cleanedText));
};
exports.isPalindrome = isPalindrome;
const treeToSentence = (t) => {
    const rootWord = t.root;
    const childSentences = R.map(exports.treeToSentence, t.children);
    return R.join(" ", R.prepend(rootWord, childSentences));
};
exports.treeToSentence = treeToSentence;
//# sourceMappingURL=part2.js.map