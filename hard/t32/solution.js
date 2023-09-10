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

    // true 代表这一段是合法的括号
    let length = s.length;
    let validateStrArr = new Array(length).fill(false);

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
            fill(validateStrArr, last.index, current.index);
        } else {
            stack.push(current);
        }
    }

    let longestLength = 0;
    let currentLength = 0;
    for (let i = 0; i < validateStrArr.length; i++) {
        if (validateStrArr[i]) {
            currentLength++;
        } else {
            if (currentLength > longestLength) {
                longestLength = currentLength;
            }
            currentLength = 0;
        }
    }
    if (currentLength > longestLength) {
        longestLength = currentLength;
    }
    return longestLength;
};

let fill = function (arr, start, end) {
    for (let i = start; i <= end; i++) {
        arr[i] = true;
    }
}

let a = longestValidParentheses(")(");
// let a = longestValidParentheses("");
console.log(a);