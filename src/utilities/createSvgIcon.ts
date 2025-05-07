const parse = require('html-react-parser');
const feather = require('feather-icons');

const createSvgIcon = (width: number, height: number, iconPadding: number = 0, iconName: string, stroke: number) => {
    const newIcon = feather.icons[iconName].toSvg({
        'stroke-width': stroke,
        width: width,
        height: height,
        color: 'var(--blueprint500)',
    });

    return parse(newIcon);
};

export default createSvgIcon;
