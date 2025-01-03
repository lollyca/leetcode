export default function twoSum(nums: number[], target: number): number[] {
    for (let index = 0; index <= nums.length - 1; index++) {
        for (let i = index + 1; i <= nums.length - 1; i++) {
            let sum = nums[index] + nums[i];

            if (sum == target) {
                return [index, i];
            }

        }
    }
    return nums;
};

// function twoSum(nums: number[], target: number): number[] {

//     for (let index = 0; index < nums.length; index++) {
//         for (let i = index + 1; i < nums.length; i++) {

//             const num = nums[index];
//             // console.log("Number: ", num, "Index: ", index, " Next is ", nums[i], " i is ", i);

//             let sum = num + nums[i];
//             // console.log("Sum: ", sum);

//             if (sum == target) {
//                 console.log([index, i]);
//                 return [index, i];
//             }
//         }
//     }
//     return nums;
// };