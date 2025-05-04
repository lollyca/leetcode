export default function gcdOfStrings(str1: string, str2: string): string {
    // Helper function to calculate the GCD of two numbers
    function gcd(a: number, b: number): number {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    const lenGCD = gcd(str1.length, str2.length);
    const candidate = str1.slice(0, lenGCD);
    console.log(str1, str2, lenGCD, candidate)

    // Check if repeating candidate reconstructs both strings
    if (str1 === candidate.repeat(str1.length / lenGCD) && str2 === candidate.repeat(str2.length / lenGCD)) {
        return candidate;
    }

    return "";
}
