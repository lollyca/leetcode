export default function myAtoi(s: string): number {
    const noSpaces = s.replace(/\s+/, '');
    let justNumbers = "";
    let result = 0;
    let flagCount = 0;

    for (let i = 0; i < noSpaces.length; i++) {
        let character = noSpaces.charCodeAt(i);

        if (flagCount === 2) {
            break;
        }
        if (character === 45 || character === 43) {
            justNumbers = justNumbers + noSpaces[i];
            flagCount++;
        }
        if (character >= 48 && character <= 57) {
            justNumbers = justNumbers + noSpaces[i];
        }
        if (character >= 65 && character <= 90) {
            break;
        }
        if (character >= 97 && character <= 122) {
            break;
        }
        if (character === 46) {
            break;
        }

    };

    if (justNumbers !== "") {
        result = parseInt(justNumbers);
    }
    if (result >= 2147483648) {
        return 2147483647;
    }
    if (result <= -2147483648) {
        return -2147483648;
    }
    if (flagCount === 2) {
        return 0;
    }
    if (Number.isNaN(result)) {
        return 0;
    }

    return result;
};

myAtoi(' -042');