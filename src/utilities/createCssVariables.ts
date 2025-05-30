import {
    type W3cDesignToken,
    type Modules
} from './createTokens'


const getValue = (value: Modules): string => {
    switch (value.$type) {
        case 'cubicBezier': {
            return `cubic-bezier(${value.$value.join(', ')})`
        } break;
        case 'duration': {
            return `${value.$value.value}${value.$value.unit}`
        }; break;
        case 'fontFamily': {
            return Array.isArray(value.$value) ? value.$value.join(' ') : value.$value ;
        }; break;
        case 'color': {
            return value.$value.hex;
        } break;
        case 'dimension': {
            return `${value.$value.value}${value.$value.unit}`
        } break;
        case 'number': {
            return String(value.$value)
        } break;
        default: {
            return ''
        }
    }
}

const createCssVariables = (tokens: W3cDesignToken) => {
    //@ts-ignore
    const CssTokensArray: any = Object.entries(tokens).reduce((previous, [_, categoryValue]) => {
        return [
            ...previous,
            ...Object.entries(categoryValue).reduce<[string, string|number][]>((previous, [variableName, variableValue]) => {
                return [
                    ...previous,
                    [variableName, getValue(variableValue)]
                ]
            }, [])
        ]
    }, []);

    (CssTokensArray as [string, string][]).forEach(([name, value]) => {
        document.documentElement.style.setProperty(
            `--${name}`, value
        );
    });

    const formattedCssTokens = (CssTokensArray as [string, string][]).map(([name, value]) => {
        return `--${name}: ${value};`
    });

    return formattedCssTokens.join('\n');
};

export default createCssVariables;
