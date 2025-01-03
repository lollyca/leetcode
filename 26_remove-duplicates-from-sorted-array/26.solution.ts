export default function removeDuplicates(nums: number[]): number {

    let run = true;

    let i = 0;
    let j = 1;
    while (run) {

        if (nums[i] === nums[j]) {
            nums.splice(j, 1);
        } else {
            i++;
            j++;
            if (j > nums.length) {
                run = false;
            };
        };
    };

    return nums.length;

};