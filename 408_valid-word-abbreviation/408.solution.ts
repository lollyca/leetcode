export default function validWordAbbreviation(word: string, abbr: string): boolean {
    let i = 0; //word
    let j = 0; //abbr

    while (i < word.length && j < abbr.length) {

        //is letter
        if (isNaN(parseInt(abbr[j]))) {
            if (abbr[j] !== word[i]) {
                return false
            }
            i++;
            j++;
        }

        //is number
        else {

            // no leading zeros
            if (abbr[i] === '0') {
                return false
            }

            //how to get all the numbers?
            let num = 0;
            while (!isNaN(parseInt(abbr[j]))) {
                num = num * 10 + parseInt(abbr[j]);
                j++;
            }

            i += num;
        }

    }
    return i === word.length && j === abbr.length
};

validWordAbbreviation("internationalization", "i12iz4n");

//1. Create 2 pointers
//2. Check if abbr[j] is letter or number
//letter: if abbr[j] and word [i] do not match return false
//number: build a full number and make i skip that number
//!!!don't forget about leading zeros!!!
//3. Return i === word.length && j === abbr.length (if false invalid)