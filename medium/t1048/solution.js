/**
 * @param {string[]} words
 * @return {number}
 */
let longestStrChain = function (words) {
    // group by length
    let lengthWordsMap = new Map();
    let minWordLength = Number.MAX_SAFE_INTEGER;
    let maxWordLength = 0;
    for (let word of words) {
        let length = word.length;
        if (length > maxWordLength) {
            maxWordLength = length;
        }
        if (length < minWordLength) {
            minWordLength = length;
        }
        let arr = lengthWordsMap.get(length);
        if (!arr) {
            arr = [];
            lengthWordsMap.set(length, arr);
        }
        arr.push(word);
    }

    let pre = new Map();
    let cur = new Map();
    let longestChainLength = 0;
    for (let i = minWordLength; i <= maxWordLength; i++) {
        let curWords = lengthWordsMap.get(i);

        if (pre.size !== 0 && curWords) {
            for (let length of pre.values()) {
                if (length > longestChainLength) {
                    longestChainLength = length;
                }
            }
            for (let curWord of curWords) {
                for (let preWord of pre.keys()) {
                    if (isPredecessor(preWord, curWord)) {
                        let length = pre.get(preWord) + 1;
                        if (!cur.get(curWord) || cur.get(curWord) < length) {
                            cur.set(curWord, length);
                        }
                    }
                }
                if (!cur.get(curWord)) {
                    cur.set(curWord, 1);
                }
            }
            pre = cur;
            cur = new Map();
            continue;
        }

        if (pre.size !== 0) {
            for (let length of pre.values()) {
                if (length > longestChainLength) {
                    longestChainLength = length;
                }
            }
        }

        if (curWords) {
            for (let curWord of curWords) {
                cur.set(curWord, 1);
            }
        }

        pre = cur;
        cur = new Map();
    }

    for (let length of pre.values()) {
        if (length > longestChainLength) {
            longestChainLength = length;
        }
    }

    return longestChainLength;
};

/**
 * if a is predecessor of b
 *
 * @param {string} a
 * @param {string} b
 */
let isPredecessor = function (a, b) {
    let flag = false;
    for (let i = 0; i < b.length; i++) {
        if (flag) {
            if (a[i - 1] !== b[i]) {
                return false;
            }
        } else {
            if (a[i] !== b[i]) {
                flag = true;
            }
        }
    }
    return true;
};

// console.log(isPredecessor("abb", "abcd"));
// console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]))
// console.log(longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"]))
console.log(longestStrChain(["ksqvsyq", "ks", "kss", "czvh", "zczpzvdhx", "zczpzvh", "zczpzvhx", "zcpzvh", "zczvh", "gr", "grukmj", "ksqvsq", "gruj", "kssq", "ksqsq", "grukkmj", "grukj", "zczpzfvdhx", "gru"]))
