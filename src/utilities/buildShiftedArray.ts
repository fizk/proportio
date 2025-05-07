import buildArray from './buildArray';

export default function buildShiftedArray(smallLength: number, largeLength: number, index: number, scaleFactor: number = 1) {
    let baseArray = buildArray(smallLength, largeLength);
    let scaledArray = baseArray.map((x, i) => {
        return x * scaleFactor + Number(index);
    });

    return scaledArray;
}
