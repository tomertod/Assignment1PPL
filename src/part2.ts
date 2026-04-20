import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = R.pipe(
    R.toLower, // make the string lowercase to count uppercase vowels as well
    stringToArray, // split the string into an array of characters
    R.filter((char: string) => vowels.includes(char)), // filter the array to include only vowels
    R.length // return the length of the filtered array, which is the count of vowels in the string
);

/* Question 2.2 */
export const isPalindrome = (text: string): boolean => {
    const cleanedText = R.pipe(
        R.toLower, // replace uppercase letters with lowercase
        R.replace(/[^a-z0-9]/g, ""))(text); // replcaing all non-alphanumeric characters with an empty string

        const checkPalindrome = (chars: string[]): boolean => {
            if(chars.length <= 1) return true;
            if(R.head(chars) !== R.last(chars)) return false;
            return checkPalindrome(R.slice(1, -1, chars));
        }
    return checkPalindrome(R.split("", cleanedText));
};
  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => {
    const rootWord = t.root;
    const childSentences = R.map(treeToSentence, t.children);
    return R.join(" ", R.prepend(rootWord, childSentences));
};
