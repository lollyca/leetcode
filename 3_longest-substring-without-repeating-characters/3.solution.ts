export default function lengthOfLongestSubstring(s: string): number {
    let result = 0;
    let biggestString = "";
    let tempString = "";

    if (s.length === 1) {
        return s.length;
    }

    for (let i = 0; i < s.length - 1; i++) {
        // check if next letter exists in the biggestString
        tempString = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] !== s[j] && !tempString.includes(s[j])) {
                tempString = tempString + s[j];
            } else {
                break;
            }
        }
        if (tempString.length > biggestString.length) {
            biggestString = tempString
        }

    }
    console.log(biggestString);
    result = biggestString.length
    return result;
};

lengthOfLongestSubstring("pwwkew");

