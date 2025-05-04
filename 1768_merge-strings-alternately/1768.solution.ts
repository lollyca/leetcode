import subarraySum from "../560-subarray-sum-equals-k/560.solution";

export default function mergeAlternately(word1: string, word2: string): string {

    let index = 0;

    let finalString = '';

    while (index < word1.length || index < word2.length) {
        let subString = '';

        if (index < word1.length) {
            subString = word1[index];
        }
        if (index < word2.length) {
            subString = subString + word2[index];
        }

        finalString = finalString + subString
        index++;
    }

    return finalString;
};

//"apbqrs"
const word1 = "abcd";
const word2 = "pq";
mergeAlternately(word1, word2);

//1. Create a final string variable
//2. Iterate throught each letter of each word using the smallest word length
//3. Add 1 letter from each word alternating between words