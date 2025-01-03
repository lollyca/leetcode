import { off } from "process";

export default function intToRoman(num: number): string {
    const numString = num.toString();
    let finalString = '';

    //Full Numbers: [ "3000", "700", "40", "9" ]
    const numArrays = numString.split('');
    for (let i = 0; i < numArrays.length; i++) {
        let addZeros = '0'.repeat(numArrays.length - i - 1);
        numArrays[i] = numArrays[i] + addZeros;
    };

    // Translating "full numbers" to roman
    for (let i = 0; i < numArrays.length; i++) {
        let fullNumberLength = numArrays[i].length;
        let timesToRepeat = parseInt(numString[i]);
        let partialString = '';

        //M
        if (fullNumberLength >= 4) {
            partialString = 'M'.repeat(timesToRepeat);
        }
        //D or C number > 2 && number < 3
        if (fullNumberLength === 3) {
            console.log('times to repeat: ', timesToRepeat)
            if (timesToRepeat < 5) {
                partialString = 'C'.repeat(timesToRepeat);
            }
            if (timesToRepeat === 4) {
                partialString = 'CD'
            }
            if (timesToRepeat === 5) {
                partialString = 'D'
            }
            if (timesToRepeat > 5 && timesToRepeat < 9) {
                partialString = 'D' + 'C'.repeat(timesToRepeat - 5)
            }
            if (timesToRepeat === 9) {
                partialString = 'CM'
            }
        }
        //L or X
        if (fullNumberLength === 2) {
            console.log('times to repeat: ', timesToRepeat)
            if (timesToRepeat <= 3) {
                partialString = 'X'.repeat(timesToRepeat);
            }
            if (timesToRepeat === 4) {
                partialString = 'XL'
            }
            if (timesToRepeat === 5) {
                partialString = 'L'
            }
            if (timesToRepeat > 5 && timesToRepeat < 9) {
                partialString = 'L' + 'X'.repeat(timesToRepeat - 5)
            }
            if (timesToRepeat === 9) {
                partialString = 'XC'
            }
        }
        //V or I
        if (fullNumberLength === 1) {
            console.log('times to repeat: ', timesToRepeat)
            if (timesToRepeat <= 3) {
                partialString = 'I'.repeat(timesToRepeat);
            }
            if (timesToRepeat === 4) {
                partialString = 'IV'
            }
            if (timesToRepeat === 5) {
                partialString = 'V'
            }
            if (timesToRepeat > 5 && timesToRepeat < 9) {
                partialString = 'V' + 'I'.repeat(timesToRepeat - 5)
            }
            if (timesToRepeat === 9) {
                partialString = 'IX'
            }
        }

        finalString = finalString + partialString;
    }

    return finalString;
};

intToRoman(3749);

//3749