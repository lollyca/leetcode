export default function longestCommonPrefix(strs: string[]): string {
    console.log('array: ', strs)
    let isSame = true;
    let tempWord = strs[0]?.split('');
    let commonPrefix = '';

    if (strs.length === 1) {
        return strs[0];
    };

    //outer loop to go through each letter from temp
    for (let i = 0; i < tempWord.length; i++) {

        //inner loop to go through every element from the array
        for (let j = 1; j < strs.length; j++) {

            let letterFromArrayElement = strs[j][i];

            if (letterFromArrayElement === tempWord[i] && isSame) {
                console.log('inner loop index ', j, ' has letter ', tempWord[i]);
            } else {
                isSame = false;
                break;
            }
        }
        if (isSame) {
            commonPrefix = commonPrefix + (tempWord[i] || '');
            console.log('Prefix:', commonPrefix)
        }
    }

    console.log(tempWord)
    return commonPrefix;

};