export function random (): {color: string, name: string} {
    const r = getRandomInt().toString(16).padStart(2, '0');
    const g = getRandomInt().toString(16).padStart(2, '0');
    const b = getRandomInt().toString(16).padStart(2, '0');

    return {
        color:`#${r}${g}${b}`,
        name: `${r}${g}${b}`.toUpperCase(),
    }
}

export function hex2rgb(color: string): [number, number, number] {
    return [
        parseInt(color.substring(1, 3), 16) / 255,
        parseInt(color.substring(3, 5), 16) / 255,
        parseInt(color.substring(5), 16) / 255,
    ];
}

export function luminosity(color: string): number {
    const [r, g, b] = hex2rgb(color)

    // L = (1 / 2) x (Max(RGB) + Min(RGB))

    return (1/2) * Math.max(r, g, b) + Math.min(r, g, b);
}

function getRandomInt(): number {
    return Math.floor(Math.random() * 255);
}
