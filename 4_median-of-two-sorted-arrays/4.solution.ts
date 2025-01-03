
export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let median = 0;
    // merge arrays and sort
    const mergedArray = nums1.concat(nums2);
    console.log('unsorted', mergedArray)
    mergedArray.sort((a, b) => a - b);
    console.log('sorted', mergedArray)

    const remainder = mergedArray.length % 2;
    if (remainder === 0) {
        const index = Math.floor((mergedArray.length - 1) / 2);
        const index2 = index + 1;
        console.log('index1: ', index, 'index2: ', index2);
        median = (mergedArray[index] + mergedArray[index2]) / 2;
        console.log(median);
        return median;

    } else {
        const index = Math.floor(mergedArray.length / 2)
        median = mergedArray[index];
        console.log(median);
        return median;

    }
};

findMedianSortedArrays([1, 3], [2]); 