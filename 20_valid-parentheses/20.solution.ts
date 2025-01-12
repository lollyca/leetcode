export default function isValid(s: string): boolean {
    const bracketMap: Record<string, string> = {
        '(': ')',
        '{': '}',
        '[': ']'
    };


    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let currentElement = s[i];

        // then its a opening bracket:
        if (bracketMap[currentElement] !== undefined) {
            stack.push(s[i]);
        }
        //then its a closing bracket:
        else {
            //is there a correct key to pop?
            let lastValue = stack[stack.length - 1];
            let correctValue = Object.keys(bracketMap).find(key => bracketMap[key] === currentElement);

            if (lastValue === correctValue) {
                stack.pop();
            } else {
                return false;
            }
        }
    }


    if (stack.length < 1) {
        return true;
    } else {
        return false;
    }
}

