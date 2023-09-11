/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
let groupThePeople = function(groupSizes) {
    let res = [];
    let map = new Map();
    for (let i = 0; i < groupSizes.length; i++) {
        let size = groupSizes[i];
        let arr = map.get(size);
        if (!arr) {
            map.set(size, [i]);
            continue;
        }
        if(arr.length === size) {
            res.push(arr);
            map.set(size, [i]);
            continue;
        }
        arr.push(i);
    }
    for(let value of map.values()) {
        res.push(value);
    }
    return res;
};