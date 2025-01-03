export default function romanToInt(s: string): number {

    //list of possible letters and values

    const values: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let sum = 0;
    //if value of the left is smaller than right
    // smaller value turns negative

    //if value of the left is bigger than right
    //sum -> LVIII (58)

    for (let i = 0; i < s.length; i++) {
        let currentValue = values[s[i]];
        let nextValue = values[s[i + 1]];

        if (currentValue < nextValue) {
            sum = sum - currentValue;
        } else {
            sum = sum + currentValue;
            console.log(sum);
        }

    }

    return sum;

};
