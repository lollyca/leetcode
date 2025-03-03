export default function minRemoveToMakeValid(s: string): string {
    let open = 0;
    let close = 0;
    let finalString = ''

    for (const letter of s) {
        if (letter === "(") {
            open++
        }
        if (letter === ")") {
            close++
        }
    }
    console.log(open, close)

    function remove(parentheses: string) {
        s = s.replace(parentheses, '');
        return s;
    }

    let removeQty = Math.abs(open - close);
    if (removeQty === 0) {
        finalString = s;
    }
    while (removeQty > 0) {
        if (open > close) {
            finalString = remove('(');
        }
        if (close > open) {
            finalString = remove(')');
        }
        removeQty--
    }

    console.log(s)

    //isvalid? 
    let stack = [];

    for (const l of s) {
        if (l === '(') {
            stack.push(l);
        }
        if (l === ')') {
            stack.pop();
        }
    }

    if (stack.length === 0) {
        return finalString;
    } else {
        return ''
    }
};

const s = "lee(t(c)o)de)"
var o = minRemoveToMakeValid(s);
console.log(o);

// 1. Iterate through the string
// 2. increment count of each parentheses
// 3. get a final number of how many I need to remove from the string
// 4. clean the string
// 5. check with stack to make sure that is valid