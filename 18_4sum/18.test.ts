import { describe, expect, test } from 'bun:test';
import fourSum from './18.solution';

describe('18. 4Sum', () => {
    test('Example 1', () => {
        const nums = [1, 0, -1, 0, -2, 2];
        const target = 0;

        const codeOutput = fourSum(nums, target);
        const expectedOutput = [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]];
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const nums = [2, 2, 2, 2, 2];
        const target = 8;

        const codeOutput = fourSum(nums, target);
        const expectedOutput = [[2, 2, 2, 2]];
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const nums = [-493, -470, -464, -453, -451, -446, -445, -407, -406, -393, -328, -312, -307, -303, -259, -253, -252, -243, -221, -193, -126, -126, -122, -117, -106, -105, -101, -71, -20, -12, 3, 4, 20, 20, 54, 84, 98, 111, 148, 149, 152, 171, 175, 176, 211, 218, 227, 331, 352, 389, 410, 420, 448, 485];
        const target = 1057;

        const codeOutput = fourSum(nums, target);
        const expectedOutput = [[-221, 410, 420, 448], [-12, 211, 410, 448], [3, 149, 420, 485], [4, 148, 420, 485], [54, 98, 420, 485], [84, 211, 352, 410], [98, 218, 331, 410], [98, 218, 352, 389], [171, 211, 227, 448]];
        expect(codeOutput).toEqual(expectedOutput);
    });
});