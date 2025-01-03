import { describe, expect, test } from 'bun:test';
import findMedianSortedArrays from './4.solution'

describe('4. Median of Two Sorted Arrays', () => {

    test('Example 1', () => {
        const nums1 = [1, 3]
        const nums2 = [2]

        const codeOutput = findMedianSortedArrays(nums1, nums2)
        const expectedOutput = 2.00000;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const nums1 = [1, 2]
        const nums2 = [3, 4]

        const codeOutput = findMedianSortedArrays(nums1, nums2)
        const expectedOutput = 2.50000;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const nums1 = [0, 0]
        const nums2 = [0, 0]

        const codeOutput = findMedianSortedArrays(nums1, nums2)
        const expectedOutput = 0.00000;
        expect(codeOutput).toEqual(expectedOutput);
    });
});