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

    // 栈，用来判断括号的有效性
    let stack = [{
        index: -1,
        symbol: ')'
    }];

    let longestLength = 0;

    for (let i = 0; i < s.length; i++) {
        let current = {
            index: i,
            symbol: s[i]
        };

        if (current.symbol === '(') {
            stack.push(current);
            continue;
        }

        let last = stack[stack.length - 1];

        if (last.symbol === '(') {
            stack.pop();
            last = stack[stack.length - 1];
            let currentLength = current.index - last.index;
            if (currentLength > longestLength) {
                longestLength = currentLength;
            }
        } else {
            let currentLength = current.index - last.index - 1;
            if (currentLength > longestLength) {
                longestLength = currentLength;
            }
            stack = [current];
        }
    }

    return longestLength;
};


// let a = longestValidParentheses(")()())");
let a = longestValidParentheses(")()((()");
// let a = longestValidParentheses("");
console.log(a);