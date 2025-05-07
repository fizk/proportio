
// // //
// //
//
const $COLLECTION_NAME = 'Collection 2';
//
// //
// // //

function remToPx(value, base = 14) {

    const result = value.$value.match(/(?<value>[0-9\.]+)(?<unit>[a-z]+)/);
    switch (result?.groups?.unit) {
        case 'rem': {
            return base * parseFloat(result?.groups?.value);
        } break;
        default:
            return parseFloat(result?.groups?.value);
            break;
    }
}

function formatValue(name, value) {
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
                        resolvedValue: remToPx(value)
                    }
                },
                scopes: [
                    "ALL_SCOPES"
                ],
                type: "FLOAT",
                valuesByMode: {
                    "311:0": remToPx(value)
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


export default function (tokens) {

    const variables = Object.entries(tokens).reduce((previous, [_, groups]) => {
        return [
            ...previous,
            ...Object.entries(groups).reduce((previous, [name, value]) => {
                return [
                    ...previous,
                    formatValue(name, value)
                ];
            }, [])
        ]
    }, []);

    const ids = Object.entries(tokens).reduce((previous, [_, groups]) => {
        return [
            ...previous,
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
