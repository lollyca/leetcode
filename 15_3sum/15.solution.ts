export default function threeSum(nums: number[]): number[][] {
    const range = nums.length;
    let allCombinations = [];
    let tempArray: any = [];
    let finalarray = [];

    //grabbing all the 3 combinations
    for (let i = 0; i < range; i++) {
        let firstNum = nums[i];

        for (let j = i + 1; j < range; j++) {
            let secondNum = nums[j];

            if (secondNum === undefined) {
                // console.log('oops, second num is outside of the array!');
                break;
            }

            for (let k = j + 1; k < range; k++) {
                let thirdNum = nums[k];
                let sum = firstNum + secondNum + thirdNum;

                // console.log(firstNum, secondNum, thirdNum, 'sum: ', sum);

                if (thirdNum === undefined) {
                    // console.log('oops, third num is outside of the array!');
                    break;
                } else {
                    if (sum === 0) {
                        // console.log('lets sum theses guys when i and j are: ', i, j, ' nums:', firstNum, secondNum, thirdNum);
                        let miniArray = [firstNum, secondNum, thirdNum];
                        allCombinations.push(miniArray);
                    }
                }
            }
        }
    }

    //cleaning the combinations to avoid repeating
    for (let element of allCombinations) {
        let sortedStr = element.slice().sort((a, b) => a - b).join(',');

        if (!tempArray.includes(sortedStr)) {
            tempArray.push(sortedStr);
            finalarray.push(element);
        }

    }

    return finalarray
}

let input = [-1, 0, 1, 2, -1, -4];
threeSum(input);

