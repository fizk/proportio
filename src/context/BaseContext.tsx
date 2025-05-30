import React, { createContext, useContext, ReactNode, useReducer } from "react";
import { ScaleUnitTypes } from "../utilities/scaleUnits";
import { ScaleMethodType } from "../utilities/scaleMethodOptions";
import { ScaleFormulaType } from "../utilities/scaleFormulas";

export interface BaseState {
    baseSize: number,
    baseScaleUnit: ScaleUnitTypes,
    // components - - - - - -
    baseComponentSizeIndex: number
    componentLineHeight: number
    componentSmallQuantity: number
    componentLargeQuantity: number
    componentDensitySmallQuantity: number
    componentDensityLargeQuantity: number
    componentDensityScaleFactor: number
    componentMinHeightMethodOption: ScaleMethodType
    componentPaddingMethodOption: ScaleMethodType
    baseComponentTextSizeIndex: number
    baseComponentPaddingXIndex: number
    baseComponentPaddingYIndex: number
    scaleComponentRadius: boolean
    baseComponentRadius: number
    // containers - - - - - -
    containerSmallSizes: number
    containerLargeSizes: number
    containerBaseElevationIndex: number
    containerBaseRadiusIndex: number
    containerRadiusScaleFactor: number
    containerBasePaddingXIndex: number
    containerBasePaddingYIndex: number
    containerPaddingFactorScale: number
    containerPaddingMethodOption: ScaleMethodType
    // elevation - - - - - -
    baseElevationSize: number
    elevationScaleFactor: number
    elevationSmallQuantity: number
    elevationLargeQuantity: number
    elevationScaleFormula: ScaleFormulaType
    elevationOffsetY: number
    // iconography - - - - - -
    iconScale: number
    iconPadding: number
    iconSmallQuantity: number
    iconLargeQuantity: number
    iconScaleFormula: ScaleFormulaType
    icon: string
    iconStroke: number
    iconStrokeScale: number
    // radius - - - - - -
    baseRadiusSize: number
    radiusScaleFactor: number
    radiusSmallQuantity: number
    radiusLargeQuantity: number
    radiusScaleFormula: ScaleFormulaType
    // spacing - - - - - -
    spacingScaleFactor: number
    spacingSmallQuantity: number
    spacingLargeQuantity: number
    spacingFormula: ScaleFormulaType
    // textIconPair - - - - - -
    textIconGapIndex: number
    textIconIconSizeIndex: number
    textIconGapScaleFormula: ScaleMethodType
    // typography - - - - - -
    typeScale: number
    typeSmallQuantity: number
    typeLargeQuantity: number
    typeScaleFormula: ScaleFormulaType
    typeFontFamily: string
    typeFontWeight: number
    // color - - - - - -
    colorArray: any[]
    colorShades: boolean
    // color - - - - - -
    cubicArray: Array<{
        id: string,
        name: string,
        values: [number, number, number, number]
    }>
}

interface ContextSignature {
    base: BaseState
    setBaseSize: ( value: number ) => void
    setBaseScaleUnit: ( value: ScaleUnitTypes ) => void
    setBaseComponentSizeIndex: ( value: number ) => void
    setComponentLineHeight: ( value: number ) => void
    setComponentSmallQuantity: ( value: number ) => void
    setComponentLargeQuantity: ( value: number ) => void
    setComponentDensitySmallQuantity: ( value: number ) => void
    setComponentDensityLargeQuantity: ( value: number ) => void
    setComponentDensityScaleFactor: ( value: number ) => void
    setComponentMinHeightMethodOption:(value: ScaleMethodType ) => void
    setComponentPaddingMethodOption:(value: ScaleMethodType ) => void
    setBaseComponentTextSizeIndex:(value: number ) => void
    setBaseComponentPaddingXIndex:(value: number ) => void
    setBaseComponentPaddingYIndex:(value: number ) => void
    setScaleComponentRadius:(value: boolean ) => void
    setBaseComponentRadius:(value: number ) => void
    setContainerSmallSizes:(value: number) => void
    setContainerLargeSizes:(value: number) => void
    setContainerBaseElevationIndex:(value: number) => void
    setContainerBaseRadiusIndex:(value: number) => void
    setContainerRadiusScaleFactor:(value: number) => void
    setContainerBasePaddingXIndex:(value: number) => void
    setContainerBasePaddingYIndex:(value: number) => void
    setContainerPaddingFactorScale:(value: number) => void
    setContainerPaddingMethodOption:( value: ScaleMethodType) => void
    setBaseElevationSize:(value: number ) => void
    setElevationScaleFactor:(value: number ) => void
    setElevationSmallQuantity:(value: number ) => void
    setElevationLargeQuantity:(value: number ) => void
    setElevationScaleFormula:(value: ScaleFormulaType ) => void
    setElevationOffsetY:(value: number ) => void
    setIconScale:(value: number) => void
    setIconPadding:(value: number) => void
    setIconSmallQuantity:(value: number) => void
    setIconLargeQuantity:(value: number) => void
    setIconScaleFormula:(value: ScaleFormulaType) => void
    setIcon:(value: string) => void
    setIconStroke:(value: number) => void
    setIconStrokeScale:(value: number) => void
    setBaseRadiusSize:(value: number ) => void
    setRadiusScaleFactor:(value: number ) => void
    setRadiusSmallQuantity:(value: number ) => void
    setRadiusLargeQuantity:(value: number ) => void
    setRadiusScaleFormula:(value: ScaleFormulaType ) => void
    setSpacingScaleFactor:(value: number ) => void
    setSpacingSmallQuantity:(value: number ) => void
    setSpacingLargeQuantity:(value: number ) => void
    setSpacingFormula:(value: ScaleFormulaType ) => void
    setTextIconGapIndex:(value: number ) => void
    setTextIconIconSizeIndex:(value: number ) => void
    setTextIconGapScaleFormula:(value: ScaleMethodType ) => void
    setTypeScale:(value: number ) => void
    setTypeSmallQuantity:(value: number ) => void
    setTypeLargeQuantity:(value: number ) => void
    setTypeScaleFormula:(value: ScaleFormulaType ) => void
    setTypeFontFamily:(value: string ) => void
    setTypeFontWeight:(value: number ) => void
    setColorArray: (value: any[]) => void
    setColorShades: (value: boolean) => void
    setCubicArray: (value: any[]) => void
}

const defaultState: BaseState = {
    baseSize: 16,
    baseScaleUnit: 'px',
    // components - - - - - -
    baseComponentSizeIndex: 1,
    componentLineHeight: 1.2,
    componentSmallQuantity: 0,
    componentLargeQuantity: 1,
    componentDensitySmallQuantity: 0,
    componentDensityLargeQuantity: 1,
    componentDensityScaleFactor: 1,
    componentMinHeightMethodOption: 'spacingScale',
    componentPaddingMethodOption: 'typeScale',
    baseComponentTextSizeIndex: 0,
    baseComponentPaddingXIndex: 0,
    baseComponentPaddingYIndex: 0,
    scaleComponentRadius: false,
    baseComponentRadius: 0,
    // containers - - - - - -
    containerSmallSizes: 0,
    containerLargeSizes: 2,
    containerBaseElevationIndex: 1,
    containerBaseRadiusIndex: 1,
    containerRadiusScaleFactor: 1,
    containerBasePaddingXIndex: 0,
    containerBasePaddingYIndex: 0,
    containerPaddingFactorScale: 1,
    containerPaddingMethodOption: 'spacingScale',
    // elevation - - - - - -
    baseElevationSize: 4,
    elevationScaleFactor: 2,
    elevationSmallQuantity: 0,
    elevationLargeQuantity: 3,
    elevationScaleFormula: 'power',
    elevationOffsetY: 100,
    // iconography - - - - - -
    iconScale: 1.125,
    iconPadding: 2,
    iconSmallQuantity: 2,
    iconLargeQuantity: 10,
    iconScaleFormula: 'power',
    icon: 'activity',
    iconStroke: 2,
    iconStrokeScale: 1.125,
    // radius - - - - - -
    baseRadiusSize: 4,
    radiusScaleFactor: 2,
    radiusSmallQuantity: 1,
    radiusLargeQuantity: 3,
    radiusScaleFormula: 'linear',
    // spacing - - - - - -
    spacingScaleFactor: 1.5,
    spacingSmallQuantity: 2,
    spacingLargeQuantity: 6,
    spacingFormula: 'power',
    // textIconPair - - - - - -
    textIconGapIndex: -10,
    textIconIconSizeIndex: 0,
    textIconGapScaleFormula: 'typeScale',
    // typography - - - - - -
    typeScale: 1.125,
    typeSmallQuantity: 2,
    typeLargeQuantity: 10,
    typeScaleFormula: 'power',
    typeFontFamily: 'Outfit',
    typeFontWeight: 400,
    // color - - - - - -
    colorArray: [{
        color: '#000000',
        name: '000000',
    }],
    colorShades: false,
    // cubic - - - - - -
    cubicArray: [{
        id: '0',
        name: 'linear',
        values: [0.14, 0.14, 0.86, 0.86],
    }],
}

type BaseAction =
    // base - - - - - -
    | { type: 'baseSize', value: number }
    | { type: 'baseScaleUnit', value: ScaleUnitTypes }
    // components - - - - - -
    | { type: 'baseComponentSizeIndex', value: number }
    | { type: 'componentLineHeight', value: number }
    | { type: 'componentSmallQuantity', value: number }
    | { type: 'componentLargeQuantity', value: number }
    | { type: 'componentDensitySmallQuantity', value: number }
    | { type: 'componentDensityLargeQuantity', value: number }
    | { type: 'componentDensityScaleFactor', value: number }
    | { type: 'componentMinHeightMethodOption', value: ScaleMethodType }
    | { type: 'componentPaddingMethodOption', value: ScaleMethodType }
    | { type: 'baseComponentTextSizeIndex', value: number }
    | { type: 'baseComponentPaddingXIndex', value: number }
    | { type: 'baseComponentPaddingYIndex', value: number }
    | { type: 'scaleComponentRadius', value: boolean }
    | { type: 'baseComponentRadius', value: number }
    // containers - - - - - -
    | { type: 'containerSmallSizes', value: number}
    | { type: 'containerLargeSizes', value: number}
    | { type: 'containerBaseElevationIndex', value: number}
    | { type: 'containerBaseRadiusIndex', value: number}
    | { type: 'containerRadiusScaleFactor', value: number}
    | { type: 'containerBasePaddingXIndex', value: number}
    | { type: 'containerBasePaddingYIndex', value: number}
    | { type: 'containerPaddingFactorScale', value: number}
    | { type: 'containerPaddingMethodOption',value: ScaleMethodType}
    // elevation - - - - - -
    | { type: 'baseElevationSize', value: number }
    | { type: 'elevationScaleFactor', value: number }
    | { type: 'elevationSmallQuantity', value: number }
    | { type: 'elevationLargeQuantity', value: number }
    | { type: 'elevationScaleFormula', value: ScaleFormulaType }
    | { type: 'elevationOffsetY', value: number }
    // iconography - - - - - -
    | {type: 'iconScale', value: number}
    | {type: 'iconPadding', value: number}
    | {type: 'iconSmallQuantity', value: number}
    | {type: 'iconLargeQuantity', value: number}
    | {type: 'iconScaleFormula', value: ScaleFormulaType}
    | {type: 'icon', value: string}
    | {type: 'iconStroke', value: number}
    | {type: 'iconStrokeScale', value: number}
    // radius - - - - - -
    | {type: 'baseRadiusSize', value: number }
    | {type: 'radiusScaleFactor', value: number }
    | {type: 'radiusSmallQuantity', value: number }
    | {type: 'radiusLargeQuantity', value: number }
    | {type: 'radiusScaleFormula', value: ScaleFormulaType }
    // spacing - - - - - -
    | {type: 'spacingScaleFactor', value: number }
    | {type: 'spacingSmallQuantity', value: number }
    | {type: 'spacingLargeQuantity', value: number }
    | {type: 'spacingFormula', value: ScaleFormulaType }
    // textIconPair - - - - - -
    | {type: 'textIconGapIndex', value: number }
    | {type: 'textIconIconSizeIndex', value: number }
    | {type: 'textIconGapScaleFormula', value: ScaleMethodType }
    // typography - - - - - -
    | {type: 'typeScale', value: number }
    | {type: 'typeSmallQuantity', value: number }
    | {type: 'typeLargeQuantity', value: number }
    | {type: 'typeScaleFormula', value: ScaleFormulaType }
    | {type: 'typeFontFamily', value: string }
    | {type: 'typeFontWeight', value: number }
    // typography - - - - - -
    | {type: 'colorArray', value: any[] }
    | {type: 'colorShades', value: boolean }
    // Cubic - - - - - -
    | {type: 'cubicArray', value: any[] }
    ;

const BaseContext = createContext<ContextSignature>({
    base: defaultState,
    setBaseSize: ( value: number ) => {},
    setBaseScaleUnit: ( value: ScaleUnitTypes ) => {},
    setBaseComponentSizeIndex: ( value: number ) => {},
    setComponentLineHeight: ( value: number ) => {},
    setComponentSmallQuantity: ( value: number ) => {},
    setComponentLargeQuantity: ( value: number ) => {},
    setComponentDensitySmallQuantity: ( value: number ) => {},
    setComponentDensityLargeQuantity: ( value: number ) => {},
    setComponentDensityScaleFactor: ( value: number ) => {},
    setComponentMinHeightMethodOption:(value: ScaleMethodType ) => {},
    setComponentPaddingMethodOption:(value: ScaleMethodType ) => {},
    setBaseComponentTextSizeIndex:(value: number ) => {},
    setBaseComponentPaddingXIndex:(value: number ) => {},
    setBaseComponentPaddingYIndex:(value: number ) => {},
    setScaleComponentRadius:(value: boolean ) => {},
    setBaseComponentRadius:(value: number ) => {},
    setContainerSmallSizes:(value: number) => {},
    setContainerLargeSizes:(value: number) => {},
    setContainerBaseElevationIndex:(value: number) => {},
    setContainerBaseRadiusIndex:(value: number) => {},
    setContainerRadiusScaleFactor:(value: number) => {},
    setContainerBasePaddingXIndex:(value: number) => {},
    setContainerBasePaddingYIndex:(value: number) => {},
    setContainerPaddingFactorScale:(value: number) => {},
    setContainerPaddingMethodOption:( ScaleMethodType) => {},
    setBaseElevationSize:(value: number ) => {},
    setElevationScaleFactor:(value: number ) => {},
    setElevationSmallQuantity:(value: number ) => {},
    setElevationLargeQuantity:(value: number ) => {},
    setElevationScaleFormula:(value: ScaleFormulaType ) => {},
    setElevationOffsetY:(value: number ) => {},
    setIconScale:(value: number) => {},
    setIconPadding:(value: number) => {},
    setIconSmallQuantity:(value: number) => {},
    setIconLargeQuantity:(value: number) => {},
    setIconScaleFormula:(value: ScaleFormulaType) => {},
    setIcon:(value: string) => {},
    setIconStroke:(value: number) => {},
    setIconStrokeScale:(value: number) => {},
    setBaseRadiusSize:(value: number ) => {},
    setRadiusScaleFactor:(value: number ) => {},
    setRadiusSmallQuantity:(value: number ) => {},
    setRadiusLargeQuantity:(value: number ) => {},
    setRadiusScaleFormula:(value: ScaleFormulaType ) => {},
    setSpacingScaleFactor:(value: number ) => {},
    setSpacingSmallQuantity:(value: number ) => {},
    setSpacingLargeQuantity:(value: number ) => {},
    setSpacingFormula:(value: ScaleFormulaType ) => {},
    setTextIconGapIndex:(value: number ) => {},
    setTextIconIconSizeIndex:(value: number ) => {},
    setTextIconGapScaleFormula:(value: ScaleMethodType ) => {},
    setTypeScale:(value: number ) => {},
    setTypeSmallQuantity:(value: number ) => {},
    setTypeLargeQuantity:(value: number ) => {},
    setTypeScaleFormula:(value: ScaleFormulaType ) => {},
    setTypeFontFamily:(value: string ) => {},
    setTypeFontWeight:(value: number ) => {},
    setColorArray: (value: any[]) => {},
    setColorShades: (value: boolean) => {},
    setCubicArray: (value: any[]) => {},
});

function BaseProvider({ children }: {children: ReactNode}) {

    const localStorage = window.localStorage.getItem('proportio');
    const baseState = localStorage ? JSON.parse(localStorage) : defaultState;

    const [state, dispatch] = useReducer(reducer, baseState);

    const properties = {
        base: state,
        setBaseSize: ( value: number ) => {
            dispatch({type: 'baseSize', value})
        },
        setBaseScaleUnit: ( value: ScaleUnitTypes ) => {
            dispatch({type: 'baseScaleUnit', value})
        },
        setBaseComponentSizeIndex: ( value: number ) => {
            dispatch({type: 'baseComponentSizeIndex', value})
        },
        setComponentLineHeight: ( value: number ) => {
            dispatch({type: 'componentLineHeight', value})
        },
        setComponentSmallQuantity: ( value: number ) => {
            dispatch({type: 'componentSmallQuantity', value})
        },
        setComponentLargeQuantity: ( value: number ) => {
            dispatch({type: 'componentLargeQuantity', value})
        },
        setComponentDensitySmallQuantity: ( value: number ) => {
            dispatch({type: 'componentDensitySmallQuantity', value})
        },
        setComponentDensityLargeQuantity: ( value: number ) => {
            dispatch({type: 'componentDensityLargeQuantity', value})
        },
        setComponentDensityScaleFactor: ( value: number ) => {
            dispatch({type: 'componentDensityScaleFactor', value})
        },
        setComponentMinHeightMethodOption:(value: ScaleMethodType ) => {
            dispatch({type: 'componentMinHeightMethodOption', value})
        },
        setComponentPaddingMethodOption:(value: ScaleMethodType ) => {
            dispatch({type: 'componentPaddingMethodOption', value})
        },
        setBaseComponentTextSizeIndex:(value: number ) => {
            dispatch({type: 'baseComponentTextSizeIndex', value})
        },
        setBaseComponentPaddingXIndex:(value: number ) => {
            dispatch({type: 'baseComponentPaddingXIndex', value})
        },
        setBaseComponentPaddingYIndex:(value: number ) => {
            dispatch({type: 'baseComponentPaddingYIndex', value})
        },
        setScaleComponentRadius:(value: boolean ) => {
            dispatch({type: 'scaleComponentRadius', value})
        },
        setBaseComponentRadius:(value: number ) => {
            dispatch({type: 'baseComponentRadius', value})
        },
        setContainerSmallSizes:(value: number) => {
            dispatch({type: 'containerSmallSizes', value})
        },
        setContainerLargeSizes:(value: number) => {
            dispatch({type: 'containerLargeSizes', value})
        },
        setContainerBaseElevationIndex:(value: number) => {
            dispatch({type: 'containerBaseElevationIndex', value})
        },
        setContainerBaseRadiusIndex:(value: number) => {
            dispatch({type: 'containerBaseRadiusIndex', value})
        },
        setContainerRadiusScaleFactor:(value: number) => {
            dispatch({type: 'containerRadiusScaleFactor', value})
        },
        setContainerBasePaddingXIndex:(value: number) => {
            dispatch({type: 'containerBasePaddingXIndex', value})
        },
        setContainerBasePaddingYIndex:(value: number) => {
            dispatch({type: 'containerBasePaddingYIndex', value})
        },
        setContainerPaddingFactorScale:(value: number) => {
            dispatch({type: 'containerPaddingFactorScale', value})
        },
        setContainerPaddingMethodOption:( value: ScaleMethodType) => {
            dispatch({type: 'containerPaddingMethodOption', value})
        },
        setBaseElevationSize:(value: number ) => {
            dispatch({type: 'baseElevationSize', value})
        },
        setElevationScaleFactor:(value: number ) => {
            dispatch({type: 'elevationScaleFactor', value})
        },
        setElevationSmallQuantity:(value: number ) => {
            dispatch({type: 'elevationSmallQuantity', value})
        },
        setElevationLargeQuantity:(value: number ) => {
            dispatch({type: 'elevationLargeQuantity', value})
        },
        setElevationScaleFormula:(value: ScaleFormulaType ) => {
            dispatch({type: 'elevationScaleFormula', value})
        },
        setElevationOffsetY:(value: number ) => {
            dispatch({type: 'elevationOffsetY', value})
        },
        setIconScale:(value: number) => {
            dispatch({type: 'iconScale', value})
        },
        setIconPadding:(value: number) => {
            dispatch({type: 'iconPadding', value})
        },
        setIconSmallQuantity:(value: number) => {
            dispatch({type: 'iconSmallQuantity', value})
        },
        setIconLargeQuantity:(value: number) => {
            dispatch({type: 'iconLargeQuantity', value})
        },
        setIconScaleFormula:(value: ScaleFormulaType) => {
            dispatch({type: 'iconScaleFormula', value})
        },
        setIcon:(value: string) => {
            dispatch({type: 'icon', value})
        },
        setIconStroke:(value: number) => {
            dispatch({type: 'iconStroke', value})
        },
        setIconStrokeScale:(value: number) => {
            dispatch({type: 'iconStrokeScale', value})
        },
        setBaseRadiusSize:(value: number ) => {
            dispatch({type: 'baseRadiusSize', value})
        },
        setRadiusScaleFactor:(value: number ) => {
            dispatch({type: 'radiusScaleFactor', value})
        },
        setRadiusSmallQuantity:(value: number ) => {
            dispatch({type: 'radiusSmallQuantity', value})
        },
        setRadiusLargeQuantity:(value: number ) => {
            dispatch({type: 'radiusLargeQuantity', value})
        },
        setRadiusScaleFormula:(value: ScaleFormulaType ) => {
            dispatch({type: 'radiusScaleFormula', value})
        },
        setSpacingScaleFactor:(value: number ) => {
            dispatch({type: 'spacingScaleFactor', value})
        },
        setSpacingSmallQuantity:(value: number ) => {
            dispatch({type: 'spacingSmallQuantity', value})
        },
        setSpacingLargeQuantity:(value: number ) => {
            dispatch({type: 'spacingLargeQuantity', value})
        },
        setSpacingFormula:(value: ScaleFormulaType ) => {
            dispatch({type: 'spacingFormula', value})
        },
        setTextIconGapIndex:(value: number ) => {
            dispatch({type: 'textIconGapIndex', value})
        },
        setTextIconIconSizeIndex:(value: number ) => {
            dispatch({type: 'textIconIconSizeIndex', value})
        },
        setTextIconGapScaleFormula:(value: ScaleMethodType ) => {
            dispatch({type: 'textIconGapScaleFormula', value})
        },
        setTypeScale:(value: number ) => {
            dispatch({type: 'typeScale', value})
        },
        setTypeSmallQuantity:(value: number ) => {
            dispatch({type: 'typeSmallQuantity', value})
        },
        setTypeLargeQuantity:(value: number ) => {
            dispatch({type: 'typeLargeQuantity', value})
        },
        setTypeScaleFormula:(value: ScaleFormulaType ) => {
            dispatch({type: 'typeScaleFormula', value})
        },
        setTypeFontFamily:(value: string ) => {
            dispatch({type: 'typeFontFamily', value})
        },
        setTypeFontWeight:(value: number ) => {
            dispatch({type: 'typeFontWeight', value})
        },
        setColorArray: (value: any[]) => {
            dispatch({type: 'colorArray', value})
        },
        setColorShades: (value: boolean) => {
            dispatch({type: 'colorShades', value})
        },
        setCubicArray: (value: any[]) => {
            dispatch({type: 'cubicArray', value})
        },
    }

	return (
        <BaseContext.Provider value={properties}>
            {children}
        </BaseContext.Provider>
    )
}

function useBase() {
    return useContext(BaseContext);
}

function reducer(state: BaseState, action: BaseAction): BaseState {
    const value = {
        ...state,
        [action.type]: action.value
    }
    window.localStorage.setItem(
        'proportio',
        JSON.stringify(value)
    );
    return value;
}

export { BaseProvider, BaseContext, useBase }
