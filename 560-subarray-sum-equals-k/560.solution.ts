export default function subarraySum(nums: number[], k: number): number {
    let validSubArray = 0;

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];

        if (n < k) {
            let next = nums[i + 1];
            const sum = n + next;

            if (sum === k) {
                validSubArray++;
            }
            // console.log(sum, ' - valid: ', validSubArray);

        } else if (n === k) {
            validSubArray++;
            // console.log('n: ', n, ' - valid: ', validSubArray);
        }

    }
    return validSubArray;
};

// const nums = [1, 2, 3];
// subarraySum(nums, 3);