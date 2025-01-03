export default function longestPalindrome(s: string): string {
    let bibbestPalindrome = '';

    if (s.length === 1) {
        return s;
    }

    for (let i = 0; i < s.length - 1; i++) {
        let checkingLetter = s[i];
        let currentString = checkingLetter;
        for (let j = i + 1; j < s.length; j++) {
            currentString = currentString + s[j];
            let reversed = currentString.split('').reverse().join('');

            if (currentString === reversed) {
                if (currentString.length > bibbestPalindrome.length) {
                    bibbestPalindrome = currentString;
                }
            }

        }

    }
    if (bibbestPalindrome.length > 0) {
        return bibbestPalindrome;
    }
    return s[0];

};

longestPalindrome("babad");

// aa