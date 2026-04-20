# Programming Languages Assignment 1 - Principles and Paradigms

**Author:** Tomer Todria  
**ID** 318784709

This repository contains the implementation for the first home assignment in the Principles of Programming Languages (PPL) course, Semester B 2026.

The project covers three main areas:
1. Theoretical Programming Paradigms (Imperative, Functional, and Object-Oriented).
2. Functional Programming in TypeScript using the Ramda library.
3. Logical recursion and list processing using the L3 (Scheme-like) functional language.

---

## Key Features and Implementation

### Part 2: Functional Programming (TypeScript and Ramda)
* Vowel Counting: Implemented using a functional pipeline to ensure data immutability and clean transformation.
* Palindrome Checker: A recursive implementation that processes strings by ignoring casing and non-alphanumeric characters, developed without using the forbidden reverse function.
* Tree Traversal: A pre-order traversal of a WordTree structure to generate concatenated sentences.

### Part 3: Monadic Computations (The Result Monad)
* Implementation of a safe findResult function that returns a Result monad instead of throwing exceptions.
* Demonstration of Monadic Bind (chaining) to process data through success and failure states safely.
* Usage of the either pattern to handle Result types without explicit conditional checks.

### Part 4: Logic in L3 (Scheme)
* List Manipulation: Recursive implementations of last-item, remove-last-item, and rotate-nth.
* Deep Reverse: A complex recursive procedure that reverses nested list structures at every depth level, utilizing a custom my-append implementation.

---

## Tech Stack
* Languages: TypeScript, Scheme (L3).
* Libraries: Ramda (Functional utility library).
* Testing: Jest for TypeScript unit tests.
* Tools: VS Code, DrRacket.

---

## Execution Instructions
1. Install project dependencies:
   npm install
2. Run automated tests:
   npm test

---

## Project Takeaway
This assignment focused on the transition from imperative logic to the functional paradigm. It explored the use of the Abstract Syntax Tree (AST) for code analysis and the implementation of monadic error handling to create more robust and predictable software structures.
