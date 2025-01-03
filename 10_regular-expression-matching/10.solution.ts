
export default function isMatch(s: string, p: string): boolean {
    let decoded = p.split('');
    let flag = false;

    if (s.length === 1 && decoded[0] === s) {
        console.log("im a very small string :)")
        return true;
    }

    for (let i = 0; i < p.length; i++) {
        if (p[i] === '.') {
            console.log('p', [i], ': .');
            decoded[i] = s[i];
            console.log('decoded: ', decoded);
        };
        if (p[i] === '*') {
            console.log('p', [i], ': *');
            decoded[i] = s[i];

            // loop trought 's' to check if it follows the pattern
            for (let j = i; j < s.length; j++) {
                let newS = s.split('');
                flag = true;
                if (decoded[i] !== newS[j]) {
                    flag = false;
                    break;
                }
            }

        };
    }

    // console.log(decoded.join(''))
    console.log('my flag is ', flag);
    return flag;

};

isMatch('a', 'a*')
// s='aa' p='a*'

