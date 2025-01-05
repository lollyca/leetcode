export default function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    // console.log(nums)
    const results: Record<string, number[]> = {

    }

    for (let i = 0; i < nums.length - 3; i++) {
        let baseNumber = nums[i];

        for (let j = i + 1; j < nums.length - 2; j++) {
            let secondBaseNumber = nums[j];

            let indexThird = j + 1;
            let indexFourth = nums.length - 1;

            while (indexThird < indexFourth) {
                const sum = baseNumber + secondBaseNumber + nums[indexThird] + nums[indexFourth];
                // console.log('show me:', [baseNumber, secondBaseNumber, nums[indexThird], nums[indexFourth]], ' =', sum)
                // console.log('show me:   ', i, '', j, '', indexThird, '', indexFourth)
                // console.log('---------------------')

                if (sum === target) {
                    results[`${baseNumber}, ${secondBaseNumber}, ${nums[indexThird]}, ${nums[indexFourth]}`] = [baseNumber, secondBaseNumber, nums[indexThird], nums[indexFourth]];
                    indexThird++;
                    indexFourth--;
                } else if (sum < target) {
                    indexThird++;
                } else {
                    indexFourth--;
                }
            }
        }
    }
    // console.log(Object.values(results))
    return Object.values(results);
};


const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
fourSum(nums, target);

