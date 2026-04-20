"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const part2_1 = require("../src/part2");
describe("Assignment 1 Part 2", () => {
    describe("countVowels", () => {
        it("counts letters", () => {
            expect((0, part2_1.countVowels)("aaabbbb")).toEqual(3);
        });
        it("counts letters", () => {
            expect((0, part2_1.countVowels)("AaaBbbb")).toEqual(3);
        });
        it("counts letters", () => {
            expect((0, part2_1.countVowels)("ABbbaab")).toEqual(3);
        });
        it("counts letters", () => {
            expect((0, part2_1.countVowels)("I am robot")).toEqual(4);
        });
        it("counts letters", () => {
            expect((0, part2_1.countVowels)("abcABCaabbcc d")).toEqual(4);
        });
    });
    describe("isPalindrome", () => {
        it("should return true for a simple palindrome", () => {
            expect((0, part2_1.isPalindrome)("racecar")).toBe(true);
        });
        it("should return true for a palindrome with mixed case", () => {
            expect((0, part2_1.isPalindrome)("RaceCar")).toBe(true);
        });
        it("should return true for a palindrome ignoring spaces and punctuation", () => {
            expect((0, part2_1.isPalindrome)("A man, a plan, a canal, Panama!")).toBe(true);
        });
        it("should return false for a non-palindrome", () => {
            expect((0, part2_1.isPalindrome)("Not a palindrome")).toBe(false);
        });
        it("should return true for an empty string", () => {
            expect((0, part2_1.isPalindrome)("")).toBe(true);
        });
        it("should return true for a single-character string", () => {
            expect((0, part2_1.isPalindrome)("a")).toBe(true);
        });
        it("should handle numeric palindromes", () => {
            expect((0, part2_1.isPalindrome)("12321")).toBe(true);
        });
        it("should handle palindromes with special characters", () => {
            expect((0, part2_1.isPalindrome)("No lemon <=> No melon")).toBe(true);
        });
    });
    describe("treeToSentence", () => {
        it("Represents a tree as a sentence", () => {
            const t1 = { root: "hello", children: [{ root: "world", children: [] }] };
            expect((0, part2_1.treeToSentence)(t1)).toBe("hello world");
        });
        it("Represents a tree as a sentence", () => {
            const t2 = { root: "hello", children: [{ root: "there", children: [] }, { root: "!", children: [] }] };
            expect((0, part2_1.treeToSentence)(t2)).toBe("hello there !");
        });
        it("Represents a tree as a sentence", () => {
            const t3 = { root: "hello", children: [{ root: "there", children: [{ root: "!", children: [] }] }] };
            expect((0, part2_1.treeToSentence)(t3)).toBe("hello there !");
        });
        it("Represents a tree as a sentence", () => {
            const t4 = { root: "hello", children: [] };
            expect((0, part2_1.treeToSentence)(t4)).toBe("hello");
        });
        it("Represents a tree as a sentence", () => {
            const t5 = { root: "", children: [] };
            expect((0, part2_1.treeToSentence)(t5)).toBe("");
        });
    });
});
//# sourceMappingURL=part2.test.js.map