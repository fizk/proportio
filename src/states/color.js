import { atom } from 'recoil';

const colorState = atom({
    key: 'colorArray',
    default: [{
        color: '#000000',
        name: '000000',
    }],
});

const colorShadesState = atom({
    key: 'colorShades',
    default: false,
});

export { colorState, colorShadesState };
