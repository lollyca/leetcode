export default function threeSumClosest(nums: number[], target: number): number {
    const sums = [];

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        let firstNum = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            let secondNum = nums[j];

            for (let k = j + 1; k < nums.length; k++) {
                let thirdNum = nums[k];

                if (thirdNum === undefined) {
                    // console.log('oops, thirdNum is out of the array');
                    break;

                } else {
                    sum = firstNum + secondNum + thirdNum;
                    // console.log('The sum of: ', firstNum, secondNum, thirdNum, ' is:', sum);
                }
                sums.push(sum);
            }

        }
    }

    // [.[.[..].].] ------ O(n)^3
    // [..] + [..] + [..] ------- O(n)

    let lowest = Number.MAX_VALUE;
    let result = 0;
    for (let i = 0; i < sums.length; i++) {

        let distance = Math.abs(target - sums[i]);

        if (distance < lowest) {
            lowest = distance
            result = sums[i];
        }
    }

    return result;

};

const nums = [-1, 2, 1, -4];
const target = 1;
threeSumClosest(nums, target);