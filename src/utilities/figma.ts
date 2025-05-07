
// // //
// //
//
const $COLLECTION_NAME = 'Collection 2';
//
// //
// // //

type ColorValue =
{
    $value: {
        alpha: number
        components: number[]
    }
    $type: 'color'
} |
{
    $value: string
    $type: 'dimension'
} |
{
    $value: string
    $type: 'number'
}

function remToPx(value: string, base = 14) {

    const result = value.match(/(?<value>[0-9\.]+)(?<unit>[a-z]+)/);
    switch (result?.groups?.unit) {
        case 'rem': {
            return base * parseFloat(result?.groups?.value);
        } break;
        default:
            return parseFloat(result?.groups?.value || '0');
            break;
    }
}

function formatValue(name: string, value: ColorValue) {
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
                        resolvedValue: remToPx(value.$value)
                    }
                },
                scopes: [
                    "ALL_SCOPES"
                ],
                type: "FLOAT",
                valuesByMode: {
                    "311:0": remToPx(value.$value)
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
                        resolvedValue: parseFloat(value.$value)
                    }
                },
                scopes: [
                    "ALL_SCOPES"
                ],
                type: "FLOAT",
                valuesByMode: {
                    "311:0": parseFloat(value.$value)
                }
            }
        } break;
    }
}


export default function (tokens: any) {

    //@ts-ignore
    const variables = Object.entries(tokens).reduce((previous, [_, groups]) => {
        return [
            ...previous,
            //@ts-ignore
            ...Object.entries(groups).reduce((previous, [name, value]) => {
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
