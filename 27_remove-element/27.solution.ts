function findQTY(array: number[], val: number) {
    let count = 0;
    for (const number of array) {
        if (number === val) {
            count++;
        }
    }
    return count;
}


export default function removeElement(nums: number[], val: number): number {
    nums.sort((a, b) => a - b);

    const start = nums.findIndex(x => x == val);
    const qty = findQTY(nums, val);

    nums.splice(start, qty)
    console.log(nums);

    return nums.length;
};

const nums = [3, 2, 2, 3, 4, 5, 4];
const val = 3;

removeElement(nums, val);