export default function maxArea(height: number[]): number {
    let area = 0;


    for (let i = 0; i < height.length; i++) {
        let newArea = 0;
        console.log('area starting as: ', area)

        for (let j = height.length - 1; j > 0; j--) {
            let multiplyBy = j - i;
            console.log('multiply ', multiplyBy)

            if (j === i) {
                break;
            } else {
                if (height[i] < height[j]) {
                    newArea = height[i] * multiplyBy;
                } else {
                    newArea = multiplyBy * height[j];
                };

                if (newArea > area) {
                    area = newArea;
                    console.log('now area is: ', area)
                }
            }

        }
    }

    return area;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(height);