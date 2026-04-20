"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnSquaredIfFoundEven_v3 = exports.returnSquaredIfFoundEven_v2 = exports.findResult = void 0;
const result_1 = require("./lib/result");
/* Library code */
const findOrThrow = (pred, a) => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i]))
            return a[i];
    }
    throw "No element found.";
};
const findResult = (pred, a) => {
    if (a.length === 0)
        return (0, result_1.makeFailure)("No element found.");
    // else, a's length is at least 1, so we can access a[0]
    if (pred(a[0]))
        return (0, result_1.makeOk)(a[0]);
    return (0, exports.findResult)(pred, a.slice(1)); // recursive call on the tail of the array
};
exports.findResult = findResult;
/* Client code */
const returnSquaredIfFoundEven_v1 = (a) => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    }
    catch (e) {
        return -1;
    }
};
const returnSquaredIfFoundEven_v2 = (a) => {
    const found = (0, exports.findResult)(x => x % 2 === 0, a);
    return (0, result_1.bind)(found, x => (0, result_1.makeOk)(x * x));
};
exports.returnSquaredIfFoundEven_v2 = returnSquaredIfFoundEven_v2;
const returnSquaredIfFoundEven_v3 = (a) => {
    const result = (0, exports.findResult)(x => x % 2 === 0, a);
    return (0, result_1.either)(result, x => x * x, (msg) => -1);
};
exports.returnSquaredIfFoundEven_v3 = returnSquaredIfFoundEven_v3;
//# sourceMappingURL=part3.js.map