import {type W3cDesignToken } from './createTokens'

const createCssVariables = (tokens: W3cDesignToken) => {
    //@ts-ignore
    const CssTokensArray: Array<[string, string]> = Object.entries(tokens).reduce((previous, [_, categoryValue]) => {
        return [
            ...previous,
            //@ts-ignore
            ...Object.entries(categoryValue).reduce((previous, [variableName, variableValue]) => {
                return [
                    ...previous,
                    [variableName, variableValue.$type === 'color' ? variableValue.$value.hex : variableValue.$value]
                ]
            }, [])
        ]
    }, []);

    CssTokensArray.forEach(([name, value]) => {
        document.documentElement.style.setProperty(
            `--${name}`, value
        );
    });

    const formattedCssTokens = CssTokensArray.map(([name, value]) => {
        return `--${name}: ${value};`
    });

    return formattedCssTokens.join('\n');
};

export default createCssVariables;
