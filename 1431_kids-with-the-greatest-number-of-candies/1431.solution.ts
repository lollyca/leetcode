export default function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // const results = [];
    let greastNumber = Math.max(...candies)

    console.log(candies, greastNumber);

    // for (let i = 0; i < candies.length; i++) {
    //     const totalCandies = candies[i] + extraCandies;
    //     const compare = totalCandies >= greastNumber;
    //     results.push(compare);
    //     console.log('total candies: ', totalCandies, 'compare: ', compare)
    // }

    const results = candies.map((candieAmount) => candieAmount + extraCandies >= greastNumber)
    console.log(results)
    return results;
};

const candies = [2, 3, 5, 1, 3]
const extraCandies = 3
//Output: [true, true, true, false, true] 

// 1. find the greast number
// 2. iterate trought each number in the array
// 3. compare if currentNumber > greastNumber
// 4. push the result to a results[];

kidsWithCandies(candies, extraCandies);