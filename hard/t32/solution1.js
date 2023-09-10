/**
 * 获取最长的有效的括号字符串
 *
 * @param {string} s
 * @return {number}
 */
let longestValidParentheses = function (s) {
    if (!s) {
        return 0;
    }

    let length = s.length;

    // 栈，用来判断括号的有效性
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let current = {
            index: i,
            symbol: s[i]
        };

        if (stack.length === 0) {
            stack.push(current);
            continue;
        }

        let last = stack[stack.length - 1];
        if (current.symbol === ')' && last.symbol === '(') {
            stack.pop();
        } else {
            stack.push(current);
        }
    }

    // 根据栈中剩下的元素，计算最大长度
    if (stack.length === 0) {
        return length;
    }

    let longestLength = stack[0].index;
    for (let i = 1; i < stack.length; i++) {
        let currentLength = stack[i].index - stack[i - 1].index - 1;
        if (currentLength > longestLength) {
            longestLength = currentLength;
        }
    }

    let currentLength = length - stack[stack.length - 1].index - 1;
    if (currentLength > longestLength) {
        longestLength = currentLength;
    }

    return longestLength;
};


let a = longestValidParentheses(")()())");
// let a = longestValidParentheses(")()((()");
// let a = longestValidParentheses("");
console.log(a);