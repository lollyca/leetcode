export default function calculate(s: string): number {
    const stack: number[] = [];
    let currentNumber = 0;
    let lastOperator = '+';

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === ' ') {
            continue;
        }

        while (!isNaN(Number(char)) && char !== ' ' && i < s.length) {
            currentNumber = currentNumber * 10 + Number(char);
            i++;
            char = s[i];
        }
        if (stack.length === 0) {
            stack.push(currentNumber);
        }

        if ((isNaN(Number(char)) && char !== ' ') || i === s.length - 1) {
            let index = i + 1
            let nextNumber = parseInt(s[index]);
            while (isNaN(Number(nextNumber)) && index < s.length - 1) {
                index++;
                i++;
                nextNumber = parseInt(s[index]);
            }
            i++;
            lastOperator = char;
            switch (lastOperator) {
                case '+':
                    stack.push(nextNumber);
                    break;
                case '-':
                    stack.push(-nextNumber);
                    break;
                case '*':
                    const multiply = stack.pop();
                    if (multiply) {
                        stack.push(multiply * nextNumber);
                    }
                    break;
                case '/':
                    const dividend = stack.pop();
                    if (dividend) {
                        const result = Math.floor(dividend / nextNumber);
                        stack.push(result);
                        break;
                    }
            }
        }
    }

    let sum = 0;
    for (const number of stack) {
        sum = sum + number;
    }
    console.log(sum);

    return sum;
};

calculate("0-2147483647");

// stack-based approach, processing the string while correctly handling operator precedence.
// push positive or negative numbers, pop if encounter * or / and push the result back

// 1. Initialize a stack to store numbers
// 2. Initialize a variable to track the current number being processed
// 3. Initialize a variable to store the last seen operator (default to '+')
// 4. Iterate over the string character by character
//    4a. If the character is a digit, update the current number
//    4b. If the character is an operator (or end of string), process the previous number based on the last seen operator:
//        - If `+`, push the number onto the stack
//        - If `-`, push the negative number onto the stack
//        - If `*`, pop the last number from the stack, multiply, and push back
//        - If `/`, pop the last number from the stack, divide (truncate towards zero), and push back
//    4c. Reset the current number and update the last seen operator
// 5. Sum all numbers in the stack and return the result


/**
NOT THE BEST
1. Parse the entire string and extract numbers and operators.
2. Evaluate the expression from left to right, performing operations as they appear.
This means we would first perform 3 + 2 = 5 and then 5 * 2 = 10, which is incorrect because multiplication should take precedence over addition.
Why This Is Bad:
1. Ignores operator precedence: The standard mathematical order of operations (multiplication and division before addition and subtraction) is not followed.
2. Inefficient: A left-to-right pass would require additional logic to handle precedence correctly.
 */