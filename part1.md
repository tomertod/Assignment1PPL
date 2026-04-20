## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative - A paradigm where the program is a sequence of commands. The computer executes these commands in the specific order they are written.
   1. [5 points] Object Oriented - A paradigm where the program is organized into objects that represent real-world entities. Each object contains both data (state) and behavior (methods). Computation is performed through message passing, where objects interact by calling each other's methods.
   1. [5 points] Functional - A paradigm where the program is viewed as a mathematical expression or a series of nested expressions. Execution is the process of evaluating these expressions to produce a value, avoiding shared state and mutable data.
1. [5 points] How does the object oriented paradigm improve over the imperative paradigm? The Object-Oriented paradigm improves over the imperative paradigm by organizing code into interacting entities (objects) rather than a long, sequential list of instructions. This modularity makes large codebases easier to maintain and understand. Additionally, by bundling data and behavior together (Encapsulation), OOP prevents accidental side effects and enables efficient code reuse through mechanisms like inheritance.
1. [5 points] How does the functional paradigm improve over the object oriented paradigm? The functional paradigm improves over the object-oriented paradigm by eliminating shared mutable state. This makes the code much easier to run in parallel (Concurrency) without risks of data corruption. Additionally, since functions are pure and deterministic, code verification and testing become simpler and more reliable. Finally, FP encourages high-level abstraction through function composition and higher-order functions, leading to more modular and predictable software design.

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

const getDiscountedProductAveragePriceFP = (inventory: Product[]) : number => {
  const discountedItems = inventory.filter(product => product.discounted)
  if(discountedItems.length === 0) return 0
  return discountedItems.map(p => p.price).reduce((sum, p) => sum + p, 0) / discountedItems.length
}

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)` ---> <T>(x: T[], y: (arg: T) => boolean) => boolean
2. [3 points] `x => x.map(y => y * 2)` ---> (x: number[]) => number[]
3. [3 points] `(x, y) => x.filter(y)` ---> <T>(x: T[], y: (arg: T) => boolean) => T[]
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)` ---> (x: number[]) => number
5. [3 points] `(x, y) => x ? y[0] : y[1]` ---> <T>(x: boolean, y: T[]) => T
6. [3 points] `(f,g) => x => f(g(x+1))` <T, R>(f: (arg: T) => R, g: (arg: number) => T) => (x: number) => R 
