/**
 * @param {string} s
 * @return {number}
 */
let minDeletions = function (s) {
    let charFrequenceMap = new Map();
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        let count = charFrequenceMap.get(ch);
        if (count !== undefined) {
            charFrequenceMap.set(ch, count + 1);
        } else {
            charFrequenceMap.set(ch, 1);
        }
    }

    let deletion = 0;

    let frequences = [];
    for (let element of charFrequenceMap.values()) {
        frequences.push(element);
    }
    frequences.sort((a, b) => a - b);

    for (let i = 1; i < frequences.length; i++) {
        let index = i;
        while (frequences[index] === frequences[index - 1] && index >= 1 && frequences[index] > 0) {
            frequences[index - 1] = frequences[index - 1] - 1;
            deletion++;
            index--;
        }
    }

    return deletion;
};

console.log("expected: 19", minDeletions("bogoidmdkbllehemdkfofcieckdoffiokflejeeffhihfbbfffboklaoochielobmcekaeoajicke"));