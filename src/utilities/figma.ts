import { type W3cDesignToken, NumberModule, DimensionModule, ColorModule } from './createTokens'

type Module = NumberModule | DimensionModule | ColorModule;

// // //
// //
//
const $COLLECTION_NAME = 'Collection 2';
//
// //
// // //

function normaliseValue(value: DimensionModule, base: number = 14) {
    switch (value.$value.unit) {
        case 'px': {
            return value.$value.value
        } break;
        case 'rem': {
            return base * value.$value.value;
        } break;
        default: return value.$value.value;
    }
}

function formatValue(name: string, value: Module) {
    switch (value.$type) {
        case 'color': {
            return {
                codeSyntax: {},
                description: "",
                hiddenFromPublishing: false,
                id: name,
                name: name,
                resolvedValuesByMode: {
                    "311:0": {
                        alias: null,
                        resolvedValue: {
                            "a": value.$value.alpha,
                            "r": value.$value.components.at(0),
                            "g": value.$value.components.at(1),
                            "b": value.$value.components.at(2),
                        }
                    }
                },
                scopes: [
                    "ALL_SCOPES"
                ],
                type: "COLOR",
                valuesByMode: {
                    "311:0": {
                        "a": value.$value.alpha,
                        "r": value.$value.components.at(0),
                        "g": value.$value.components.at(1),
                        "b": value.$value.components.at(2),
                    }
                }
            }
        } break;
        case 'dimension': {
            return {
                codeSyntax: {},
                description: "",
                hiddenFromPublishing: false,
                id: name,
                name: name,
                resolvedValuesByMode: {
                    "311:0": {
                        alias: null,
                        resolvedValue: normaliseValue(value)
                    }
                },
                scopes: [
                    "ALL_SCOPES"
                ],
                type: "FLOAT",
                valuesByMode: {
                    "311:0": normaliseValue(value)
                }
            }
        } break;
        case 'number': {
            return {
                codeSyntax: {},
                description: "",
                hiddenFromPublishing: false,
                id: name,
                name: name,
                resolvedValuesByMode: {
                    "311:0": {
                        alias: null,
                        resolvedValue: value.$value
                    }
                },
                scopes: [
                    "ALL_SCOPES"
                ],
                type: "FLOAT",
                valuesByMode: {
                    "311:0": value.$value
                }
            }
        } break;
    }
}


export default function (tokens: W3cDesignToken) {
    const exclude = ['fontWeight', 'fontFamily', 'cubicBezier']
    //@ts-ignore
    const variables = Object.entries(tokens).reduce((previous, [_, groups]) => {
        return [
            ...previous,
            //@ts-ignore
            ...Object.entries(groups).reduce((previous, [name, value]) => {
                if (exclude.includes(value.$type)) return previous;
                return [
                    ...previous,
                    //@ts-ignore
                    formatValue(name, value)
                ];
            }, [])
        ]
    }, []);

    //@ts-ignore
    const ids = Object.entries(tokens).reduce((previous, [_, groups]) => {
        return [
            ...previous,
            //@ts-ignore
            ...Object.entries(groups).reduce((previous, [name, value]) => {
                if (exclude.includes(value.$type)) return previous;
                return [
                    ...previous,
                    name,
                ];
            }, [])
        ]
    }, []);

    return {
        id: "VariableCollectionId:311:3",
        modes: {
            "311:0": "Mode 1"
        },
        name: $COLLECTION_NAME,
        variableIds: ids,
        variables: variables
    }
}
