export default function threeSumClosest(nums: number[], target: number): number {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);
    console.log(nums)

    let closestSum = Infinity; // Initialize closestSum with a very large value

    // Step 2: Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        console.log('before while - num:', nums[i], ' left', nums[left], ' right:', nums[right],);

        while (left < right) {
            // Calculate the current sum of the three numbers
            const currentSum = nums[i] + nums[left] + nums[right];

            // Step 3: Update closestSum if currentSum is closer to the target
            if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                closestSum = currentSum;
            }

            // Step 4: Move pointers
            if (currentSum < target) {
                left++; // Move the left pointer to increase the sum
            } else if (currentSum > target) {
                right--; // Move the right pointer to decrease the sum
            } else {
                // If currentSum == target, return it immediately as it's the closest possible
                return currentSum;
            }

            console.log('inside while - num:', nums[i], ' left', nums[left], ' right:', nums[right],);
        }
    }

    return closestSum;
}


const nums = [-1, 2, 1, -4];
const target = 1;
threeSumClosest(nums, target);