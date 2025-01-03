const digitMap: Record<string, string[]> = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
};

export default function letterCombinations(digits: string): string[] {
    if (digits.length === 0) {
        return []
    }
    if (digits.length === 1) {
        const index = digits[0];
        const result = digitMap[index]
        return result
    }

    const results: string[] = [];

    //Array with all letter combinations
    const groupsOfLetters: string[][] = [];
    for (let i = 0; i < digits.length; i++) {
        let key = digits[i];
        groupsOfLetters.push(digitMap[key]);
    }
    // console.log(groupsOfLetters);

    let stop = true;
    while (stop) {
        function loop(input: string[], input2: string[]) {

            let tempCombinations = [];
            for (let j = 0; j < input.length; j++) {
                for (let k = 0; k < input2.length; k++) {
                    let combination = input[j] + input2[k]
                    // console.log(input, input2)
                    // console.log(combination)
                    tempCombinations.push(combination);
                }
                groupsOfLetters[0] = tempCombinations;
                // console.log(groupsOfLetters)
            }
        }
        if (groupsOfLetters.length > 1) {
            // console.log('start')
            loop(groupsOfLetters[0], groupsOfLetters[1]);
            let indx = groupsOfLetters.indexOf(groupsOfLetters[1]);
            groupsOfLetters.splice(indx, 1);
            // console.log('new array: ', groupsOfLetters)
        } else {
            stop = false;
        }
    }
    // console.log(groupsOfLetters[0])

    return groupsOfLetters[0];
};

const digits = "5678";
letterCombinations(digits);