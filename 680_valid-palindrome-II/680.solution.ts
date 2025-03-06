export default function validPalindrome(s: string): boolean {
    let start = 0;
    let end = s.length - 1
    let flip = true;


    while (start < end) {
        if (s[start] === s[end]) {
            start++;
            end--;
        } else {
            if (s[start + 1] === s[end] && flip) {
                start++;
                flip = false;
                continue;
            }
            if (s[end - 1] === s[start] && flip) {
                end--;
                flip = false;
                continue;
            }
            return false;
        }
    }

    return true;
};

//create two pointers and check if they match (one at the start and another one at the end)
//match: increment
//does not match, check each one I can remove to make it match

//abca
//ab vs ca
//ab vs ac
// a match - b c does not - remove c
//find middle again - check both sides

validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga");