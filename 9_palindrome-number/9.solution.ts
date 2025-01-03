export default function isPalindrome(x: number): boolean {

    const numString = x.toString();
    let reversed = '';

    for (let i = numString.length - 1; i >= 0; i--) {
        reversed += numString[i];
        // console.log(reversed);
    }

    if (numString === reversed) {
        return true;
    }

    return false
};

//

// export default function isPalindrome(x: number): boolean {
//     const numString = x.toString();
//     const reverse = numString.split("").reverse().join("");

//     if (numString === reverse) {
//         return true;
//     }

//     return false
// };


