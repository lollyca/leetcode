export default function reverse(x: number): number {
    let backToInteger = 0;

    if (x > 2147483648 || x < -2147483648) {
        return 0;
    }

    const abs = Math.abs(x);
    const numString = abs.toString();
    const reverd = numString.split('').reverse().join('');

    if (abs !== x) {
        backToInteger = parseInt(reverd) * -1;
    } else {
        backToInteger = parseInt(reverd);
    }

    if (backToInteger > 2147483648 || backToInteger < -2147483648) {
        return 0;
    }

    return backToInteger;
};

reverse(-234);