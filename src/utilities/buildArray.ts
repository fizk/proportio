
export default function buildArray(smallLength: number, largeLength: number) {
    let smallSizeArray = Array.from(
        { length: smallLength },
        (x, i) => (i + 1) * -1,
    );
    smallSizeArray.sort(function (a, b) {
        return a - b;
    });
    const largeSizeArray = Array.from({ length: largeLength }, (x, i) => i);
    return [...smallSizeArray, ...largeSizeArray];
}
