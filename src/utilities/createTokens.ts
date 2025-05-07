import { useRecoilState } from 'recoil';
/** States */
import {
    baseSizeState,
    baseMobileScaleFactorState,
    baseScaleUnitState,
} from '../states/base';
import {
    baseComponentSizeIndexState,
    componentLineHeightState,
    componentSmallQuantityState,
    componentLargeQuantityState,
    componentMinHeightMethodOptionState,
    componentPaddingMethodOptionState,
    baseComponentTextSizeIndexState,
    baseComponentPaddingXIndexState,
    baseComponentPaddingYIndexState,
    componentDensitySmallQuantityState,
    componentDensityLargeQuantityState,
    componentDensityScaleFactorState,
    scaleComponentRadiusState,
    baseComponentRadiusState,
} from '../states/components';
import {
    containerSmallSizesState,
    containerLargeSizesState,
    containerBasePaddingXIndexState,
    containerBasePaddingYIndexState,
    containerBaseElevationIndexState,
    containerRadiusScaleFactorState,
    containerPaddingScaleFactorState,
    containerBaseRadiusIndexState,
    containerPaddingMethodOptionState,
} from '../states/containers';
import {
    baseElevationSizeState,
    elevationScaleFactorState,
    elevationSmallQuantityState,
    elevationLargeQuantityState,
    elevationScaleFormulaState,
    elevationOffsetYState,
} from '../states/elevation';
import {
    iconScaleState,
    iconSmallQuantityState,
    iconLargeQuantityState,
    iconScaleFormulaState,
    iconPaddingState,
    iconState,
    iconStrokeState,
    iconStrokeScaleState,
} from '../states/iconography';
import {
    baseRadiusSizeState,
    radiusScaleFactorState,
    radiusSmallQuantityState,
    radiusLargeQuantityState,
    radiusScaleFormulaState,
} from '../states/radius';
import {
    spacingScaleFactorState,
    spacingSmallQuantityState,
    spacingLargeQuantityState,
    spacingFormulaState,
} from '../states/spacing';
import {
    textIconGapIndexState,
    textIconIconSizeIndexState,
    textIconGapScaleFormulaState,
} from '../states/textIconPair';
import {
    typeScaleState,
    typeSmallQuantityState,
    typeLargeQuantityState,
    typeScaleFormulaState,
    typeFontFamilyState,
    typeFontWeightState,
} from '../states/typography';
import { colorState } from '../states/color';
/** Utilities */
import {
    sizeNamesIncrement,
    sizeNamesDecrement,
    densityNamesIncrement,
    densityNamesDecrement,
} from '../utilities/names';
import calculateScale from './calculateScale';
import buildArray from './buildArray';
import buildShiftedArray from './buildShiftedArray';
import { pSBC } from '../utilities/pSBC';
import { hex2rgb } from '../utilities/color';
import round from './round';

const createTokens = (): W3cDesignToken => {

    const [baseSize] = useRecoilState(baseSizeState);

    const [baseMobileScaleFactor] = useRecoilState(baseMobileScaleFactorState,);
    const [baseScaleUnit] = useRecoilState(baseScaleUnitState);
    const [baseComponentSizeIndex] = useRecoilState(baseComponentSizeIndexState,);
    const [componentLineHeight] = useRecoilState(componentLineHeightState,);

    const [componentSmallQuantity] = useRecoilState(componentSmallQuantityState,);
    const [componentLargeQuantity] = useRecoilState(componentLargeQuantityState,);
    const [componentMinHeightMethodOption] = useRecoilState(componentMinHeightMethodOptionState);
    const [componentPaddingMethodOption] = useRecoilState(componentPaddingMethodOptionState);
    const [baseComponentTextSizeIndex] = useRecoilState(baseComponentTextSizeIndexState);
    const [baseComponentPaddingXIndex] = useRecoilState(baseComponentPaddingXIndexState);
    const [baseComponentPaddingYIndex] = useRecoilState(baseComponentPaddingYIndexState);
    const [componentDensitySmallQuantity] = useRecoilState(componentDensitySmallQuantityState);
    const [componentDensityLargeQuantity] = useRecoilState(componentDensityLargeQuantityState);
    const [componentDensityScaleFactor] = useRecoilState(componentDensityScaleFactorState);
    const [scaleComponentRadius] = useRecoilState(scaleComponentRadiusState,);
    const [baseComponentRadius] = useRecoilState(baseComponentRadiusState,);
    const [containerSmallSizes] = useRecoilState(containerSmallSizesState,);
    const [containerLargeSizes] = useRecoilState(containerLargeSizesState,);
    const [containerBasePaddingXIndex] = useRecoilState(containerBasePaddingXIndexState);
    const [containerBasePaddingYIndex] = useRecoilState(containerBasePaddingYIndexState);
    const [containerBaseElevationIndex] = useRecoilState(containerBaseElevationIndexState);
    const [containerRadiusScaleFactor] = useRecoilState(containerRadiusScaleFactorState);
    const [containerPaddingScaleFactor] = useRecoilState(containerPaddingScaleFactorState);
    const [containerBaseRadiusIndex] = useRecoilState(containerBaseRadiusIndexState);
    const [containerPaddingMethodOption] = useRecoilState(containerPaddingMethodOptionState);
    const [baseElevationSize] = useRecoilState(baseElevationSizeState,);
    const [elevationScaleFactor] = useRecoilState(elevationScaleFactorState,);
    const [elevationSmallQuantity] = useRecoilState(elevationSmallQuantityState,);
    const [elevationLargeQuantity] = useRecoilState(elevationLargeQuantityState,);
    const [elevationScaleFormula] = useRecoilState(elevationScaleFormulaState,);
    const [elevationOffsetY] = useRecoilState(elevationOffsetYState,);
    const [iconScale] = useRecoilState(iconScaleState);
    const [iconSmallQuantity] = useRecoilState(iconSmallQuantityState,);
    const [iconLargeQuantity] = useRecoilState(iconLargeQuantityState,);
    const [iconScaleFormula] = useRecoilState(iconScaleFormulaState,);
    const [iconPadding] = useRecoilState(iconPaddingState);
    const [icon] = useRecoilState(iconState);
    const [iconStroke] = useRecoilState(iconStrokeState);
    const [iconStrokeScale] = useRecoilState(iconStrokeScaleState);
    const [baseRadiusSize] = useRecoilState(baseRadiusSizeState);
    const [radiusScaleFactor] = useRecoilState(radiusScaleFactorState,);
    const [radiusSmallQuantity] = useRecoilState(radiusSmallQuantityState,);
    const [radiusLargeQuantity] = useRecoilState(radiusLargeQuantityState,);
    const [radiusScaleFormula] = useRecoilState(radiusScaleFormulaState,);
    const [spacingScaleFactor] = useRecoilState(spacingScaleFactorState,);
    const [spacingSmallQuantity] = useRecoilState(spacingSmallQuantityState,);
    const [spacingLargeQuantity] = useRecoilState(spacingLargeQuantityState,);
    const [spacingFormula] = useRecoilState(spacingFormulaState);
    const [textIconGapIndex] = useRecoilState(textIconGapIndexState,);
    const [textIconIconSizeIndex] = useRecoilState(textIconIconSizeIndexState,);
    const [textIconGapScaleFormula] = useRecoilState(textIconGapScaleFormulaState,);
    const [typeScale] = useRecoilState(typeScaleState);
    const [typeSmallQuantity] = useRecoilState(typeSmallQuantityState,);
    const [typeLargeQuantity] = useRecoilState(typeLargeQuantityState,);
    const [typeScaleFormula] = useRecoilState(typeScaleFormulaState,);
    const [typeFontFamily] = useRecoilState(typeFontFamilyState);
    const [typeFontWeight] = useRecoilState(typeFontWeightState);

    const [colorArray] = useRecoilState(colorState);

    /** TOKEN KEYS */
    const typeKey = 'typography';
    const iconsKey = 'iconography';
    const spacingKey = 'spacing';
    const elevationKey = 'elevation';
    const radiusKey = 'radius';
    const textIconKey = 'text-icon-gap';
    const componentKey = 'component';
    const containerKey = 'container';
    const colorKey = 'color';


    /** TYPOGRAPHY TOKENS */
    let typographyObject: { [key: string]: DimensionModule | NumberModule} = {
        'text-lineheight': {
            $value: `${typeScale}`,
            $type: 'number'
        },
        'text-base': {
            $type: 'dimension',
            $value: {
                value: baseSize,
                unit: 'px'
            }
        },
        'text-weight': {
            $value: `${typeFontWeight}`,
            $type: 'number'
        },
    };
    const smallType = new Array(typeSmallQuantity).fill(0);
    const largeType = new Array(typeLargeQuantity).fill(0);

    smallType.map((e, i) => {
        const increment = (i + 1) * -1;
        const size = Math.round(
            calculateScale(baseSize, typeScale, increment, typeScaleFormula),
        );
        const name = `text-size-${100 + increment * 10}`;
        const value =
            baseScaleUnit === 'px'
                ? `${size}${baseScaleUnit}`
                : `${round(size / baseSize, 3)}${baseScaleUnit}`;
        typographyObject = {
            ...typographyObject,
            [name]: {
                $value: {
                    value: value,
                    unit: baseScaleUnit
                },
                $type: 'dimension',
            },
        }
    });
    largeType.map((e, i) => {
        const size = Math.round(
            calculateScale(baseSize, typeScale, i, typeScaleFormula),
        );
        const name = `text-size-${100 * (i + 1)}`;
        const value =
            baseScaleUnit === 'px'
                ? `${size}${baseScaleUnit}`
                : `${round(size / baseSize, 3)}${baseScaleUnit}`;
        typographyObject = {
            ...typographyObject,
            [name]: {
                $value: {
                    value: value,
                    unit: baseScaleUnit
                },
                $type: 'dimension',
            },
        };
    });

    /** ICONOGRAPHY TOKENS */
    let iconsObject = {};
    const smallIcons = new Array(iconSmallQuantity).fill(0);
    const largeIcons = new Array(iconLargeQuantity).fill(0);

    smallIcons.map((e, i) => {
        const increment = (i + 1) * -1;
        const size = Math.round(
            calculateScale(baseSize, iconScale, increment, iconScaleFormula),
        );
        const name = `icon-size-${100 + increment * 10}`;
        const value =
            baseScaleUnit === 'px'
                ? `${size}${baseScaleUnit}`
                : `${round(size / baseSize, 3)}${baseScaleUnit}`;

        iconsObject = {
            ...iconsObject,
            [name]: {
                $value: `${value}`,
                $type: 'dimension',
            },
        };
    });
    largeIcons.map((e, i) => {
        const size = Math.round(
            calculateScale(baseSize, iconScale, i, iconScaleFormula),
        );
        const name = `icon-size-${100 * (i + 1)}`;
        const value =
            baseScaleUnit === 'px'
                ? `${size}${baseScaleUnit}`
                : `${round(size / baseSize, 3)}${baseScaleUnit}`;

        iconsObject = {
            ...iconsObject,
            [name]: {
                $value: `${value}`,
                $type: 'dimension',
            },
        };
    });

    /** SPACING TOKENS */
    let spacingObject = {};
    const smallSpacing = new Array(spacingSmallQuantity).fill(0);
    const largeSpacing = new Array(spacingLargeQuantity).fill(0);

    smallSpacing.map((e, i) => {
        let increment = (i + 1) * -1;
        const size = Math.round(
            calculateScale(baseSize, spacingScaleFactor, increment, spacingFormula),
        );
        const name = `spacing-${100 + increment * 10}`;
        const value =
            baseScaleUnit === 'px'
                ? `${size}${baseScaleUnit}`
                : `${round(size / baseSize, 3)}${baseScaleUnit}`;

        spacingObject = {
            ...spacingObject,
            [name]: {
                $value: `${value}`,
                $type: 'dimension',
            },
        }

    });
    largeSpacing.map((e, i) => {
        const size = Math.round(
            calculateScale(baseSize, spacingScaleFactor, i, spacingFormula),
        );
        const name = `spacing-${100 * (i + 1)}`;
        const value =
            baseScaleUnit === 'px'
                ? `${size}${baseScaleUnit}`
                : `${round(size / baseSize, 3)}${baseScaleUnit}`;

        spacingObject = {
            ...spacingObject,
            [name]: {
                $value: `${value}`,
                $type: 'dimension',
            },
        };
    });

    /** RADIUS TOKENS */
    let radiusObject: {[key: string]: DimensionModule} = {};
    const radiusQuantity = buildArray(radiusSmallQuantity, radiusLargeQuantity);
    const radiusSizes = radiusQuantity.map((i) => {
        return calculateScale(
            baseRadiusSize,
            radiusScaleFactor,
            i,
            radiusScaleFormula,
        );
    });
    radiusSizes.map((size, i) => {
        const name = `radius-${100 * (i + 1)}`;
        const value =
            baseScaleUnit === 'px'
                ? `${size}${baseScaleUnit}`
                : `${round(size / baseSize, 3)}${baseScaleUnit}`;
        radiusObject = {
            ...radiusObject,
            [name]: {
                $value: {
                    value: value,
                    unit: baseScaleUnit
                },
                $type: 'dimension',
            },
        };
    });

    /** ELEVATION TOKENS */
    let elevationObject: {[key: string]: DimensionModule} = {};
    const elevationQuantity = buildArray(
        elevationSmallQuantity,
        elevationLargeQuantity,
    );
    const elevationSizes = elevationQuantity.map((i) => {
        return calculateScale(
            baseElevationSize,
            elevationScaleFactor,
            i,
            elevationScaleFormula,
        );
    });
    const offsets = elevationSizes.map((size) => {
        return size * (elevationOffsetY / 100);
    });
    elevationSizes.map((size, i) => {
        const nameX = `elevation-${100 * (i + 1)}-offsetY`;
        const nameY = `elevation-${100 * (i + 1)}-blur`;
        const valueX =
            baseScaleUnit === 'px'
                ? `${offsets[i]}${baseScaleUnit}`
                : `${round(offsets[i] / baseSize, 3)}${baseScaleUnit}`;
        const valueY =
            baseScaleUnit === 'px'
                ? `${size}${baseScaleUnit}`
                : `${round(size / baseSize, 3)}${baseScaleUnit}`;

        elevationObject = {
            ...elevationObject,
            [nameX]: {
                $value: {
                    value: valueX,
                    unit: baseScaleUnit
                },
                $type: 'dimension',
            },
        }
        elevationObject = {
            ...elevationObject,
            [nameY]: {
                $value: {
                    value: valueY,
                    unit: baseScaleUnit
                },
                $type: 'dimension',
            },
        }
    });

    /** ---------------------------------------- */
    /**              ALIAS TOKENS                */
    /** ---------------------------------------- */

    /** TEXT + ICON PAIRING */
    let textIconGapObject = {};
    const gapScale =
        textIconGapScaleFormula === 'typeScale'
            ? typeScale
            : textIconGapScaleFormula === 'spacingScale'
                ? spacingScaleFactor
                : 1;
    const gapMethod =
        textIconGapScaleFormula === 'typeScale'
            ? typeScaleFormula
            : textIconGapScaleFormula === 'spacingScale'
                ? spacingFormula
                : 1;

    let smallTextIconSizes = new Array(typeSmallQuantity).fill(0);
    let largeTextIconSizes = new Array(typeLargeQuantity).fill(0);
    const gapArray =
        textIconGapScaleFormula === 'typeScale' ? typographyObject : spacingObject;
    const gapReference =
        textIconGapScaleFormula === 'typeScale' ? typeKey : spacingKey;

    smallTextIconSizes.map((e, i) => {
        const increment = (1 + i) * -1 + textIconGapIndex;
        const gapSize = Math.round(
            calculateScale(baseSize, gapScale, increment, gapMethod),
        );

        const gapValue =
            baseScaleUnit === 'px'
                ? `${gapSize}${baseScaleUnit}`
                : `${round(gapSize / baseSize, 3)}${baseScaleUnit}`;

        const tokenName = `text-icon-gap-${100 + (1 + i) * -1 * 10}`;
        textIconGapObject = {
            ...textIconGapObject,
            [tokenName]: {
                $value: gapValue,
                $type: 'dimension',
            },
        };
    });

    largeTextIconSizes.map((e, i) => {
        const increment = i + textIconGapIndex;
        const gapSize = Math.round(
            calculateScale(baseSize, gapScale, increment, gapMethod),
        );

        const gapValue =
            baseScaleUnit === 'px'
                ? `${gapSize}${baseScaleUnit}`
                : `${round(gapSize / baseSize, 3)}${baseScaleUnit}`;

        const tokenName = `text-icon-gap-${100 * (i + 1)}`;

        textIconGapObject = {
            ...textIconGapObject,
            [tokenName]: {
                $value: gapValue,
                $type: 'dimension',
            },
        };
    });

    /** COMPONENT TOKENS */
    let componentsObject = {};
    const sizeArray = buildArray(componentSmallQuantity, componentLargeQuantity);
    const densityArray = buildArray(
        componentDensitySmallQuantity,
        componentDensityLargeQuantity,
    );

    /* Create arrays of sub-element indexes */
    const densityPaddingXIndexArray = buildShiftedArray(
        componentDensitySmallQuantity,
        componentDensityLargeQuantity,
        baseComponentPaddingXIndex,
        componentDensityScaleFactor,
    );

    const densityPaddingYIndexArray = buildShiftedArray(
        componentDensitySmallQuantity,
        componentDensityLargeQuantity,
        baseComponentPaddingYIndex,
        componentDensityScaleFactor,
    );
    const gapIndexArray = buildShiftedArray(
        componentSmallQuantity,
        componentLargeQuantity,
        textIconGapIndex,
    );

    const textSizeIndexArray = buildShiftedArray(
        componentSmallQuantity,
        componentLargeQuantity,
        baseComponentTextSizeIndex,
    );
    const iconSizeIndexArray = buildShiftedArray(
        componentSmallQuantity,
        componentLargeQuantity,
        textIconIconSizeIndex,
    );
    const componentMinHeightIndexArray = buildShiftedArray(
        componentSmallQuantity,
        componentLargeQuantity,
        baseComponentSizeIndex,
    );
    const componentRadiusIndexArray = buildShiftedArray(
        componentSmallQuantity,
        componentLargeQuantity,
        baseComponentRadius,
    );

    const componentGapScale =
        textIconGapScaleFormula === 'typeScale'
            ? typeScale
            : textIconGapScaleFormula === 'spacingScale'
                ? spacingScaleFactor
                : 1;
    const componentGapMethod =
        textIconGapScaleFormula === 'typeScale'
            ? typeScaleFormula
            : textIconGapScaleFormula === 'spacingScale'
                ? spacingFormula
                : 1;
    const componentPaddingScale =
        componentPaddingMethodOption === 'typeScale'
            ? typeScale
            : componentPaddingMethodOption === 'spacingScale'
                ? spacingScaleFactor
                : 1;
    const componentPaddingMethodFormula =
        componentPaddingMethodOption === 'typeScale'
            ? typeScaleFormula
            : componentPaddingMethodOption === 'spacingScale'
                ? spacingFormula
                : undefined;
    const componentScale =
        componentMinHeightMethodOption === 'typeScale'
            ? typeScale
            : componentMinHeightMethodOption === 'spacingScale'
                ? spacingScaleFactor
                : 1;
    const componentScaleMethodFormula =
        componentMinHeightMethodOption === 'typeScale'
            ? typeScaleFormula
            : componentMinHeightMethodOption === 'spacingScale'
                ? spacingFormula
                : undefined;

    /* Map each density */
    densityArray.map((density, densityIncrement) => {
        const paddingXIndexArray = buildShiftedArray(
            componentSmallQuantity,
            componentLargeQuantity,
            densityPaddingXIndexArray[densityIncrement],
        );
        const paddingYIndexArray = buildShiftedArray(
            componentSmallQuantity,
            componentLargeQuantity,
            densityPaddingYIndexArray[densityIncrement],
        );

        const decrementIndex = density * -1 - 1;
        let densityName =
            density < 0
                ? densityNamesDecrement[decrementIndex]
                : densityNamesIncrement[density];
        if (densityName === undefined) densityName = 'undefined';

        const tokenNamePrefix = `component-${densityName.replace(
            ' (default)',
            '',
        )}`;

        sizeArray.map((size, increment) => {
            const decrementIndex = size * -1 - 1;
            let sizeName =
                size < 0
                    ? sizeNamesDecrement[decrementIndex]
                    : sizeNamesIncrement[size];
            if (sizeName === undefined) sizeName = 'undefined';

            const newTokenNamePrefix = `${tokenNamePrefix}-${sizeName.replace(
                ' (default)',
                '',
            )}`;
            const gapSize = calculateScale(
                baseSize,
                componentGapScale,
                gapIndexArray[increment],
                componentGapMethod,
            );

            const gapValue = baseScaleUnit === 'px'
                ? `${gapSize}${baseScaleUnit}`
                : `${round(gapSize / baseSize, 3)}${baseScaleUnit}`;

            const paddingX = calculateScale(
                baseSize,
                componentPaddingScale,
                paddingXIndexArray[increment],
                componentPaddingMethodFormula,
            );
            const paddingXValue = baseScaleUnit === 'px'
                ? `${paddingX}${baseScaleUnit}`
                : `${round(paddingX / baseSize, 3)}${baseScaleUnit}`;

            const paddingY = calculateScale(
                baseSize,
                componentPaddingScale,
                paddingYIndexArray[increment],
                componentPaddingMethodFormula,
            );
            const paddingYValue = baseScaleUnit === 'px'
                ? `${paddingY}${baseScaleUnit}`
                : `${round(paddingY / baseSize, 3)}${baseScaleUnit}`;

            const typeSize = calculateScale(
                baseSize,
                typeScale,
                textSizeIndexArray[increment],
                typeScaleFormula,
            );
            const typeSizeValue = baseScaleUnit === 'px'
                ? `${typeSize}${baseScaleUnit}`
                : `${round(typeSize / baseSize, 3)}${baseScaleUnit}`;

            const iconSize = calculateScale(
                baseSize,
                iconScale,
                iconSizeIndexArray[increment],
                iconScaleFormula,
            );
            const iconSizeValue = baseScaleUnit === 'px'
                ? `${iconSize}${baseScaleUnit}`
                : `${round(iconSize / baseSize, 3)}${baseScaleUnit}`;

            const componentMinHeight = calculateScale(
                baseSize,
                componentScale,
                componentMinHeightIndexArray[increment],
                componentScaleMethodFormula,
            );
            const componentMinHeightValue = baseScaleUnit === 'px'
                ? `${componentMinHeight}${baseScaleUnit}`
                : `${round(componentMinHeight / baseSize, 3)}${baseScaleUnit}`;

            const scaledComponentRadius = calculateScale(
                baseRadiusSize,
                radiusScaleFactor,
                componentRadiusIndexArray[increment],
                radiusScaleFormula,
            );
            const scaledComponentRadiusValue = baseScaleUnit === 'px'
                ? `${scaledComponentRadius}${baseScaleUnit}`
                : `${round(scaledComponentRadius / baseSize, 3)}${baseScaleUnit}`;

            componentsObject = {
                ...componentsObject,
                [`${newTokenNamePrefix}-gap`]: {
                    $value: gapValue,
                    $type: 'dimension',
                },
            };

            componentsObject = {
                ...componentsObject,
                [`${newTokenNamePrefix}-left`]: {
                    $value: paddingXValue,
                    $type: 'dimension',
                },
            };

            componentsObject = {
                ...componentsObject,
                [`${newTokenNamePrefix}-right`]: {
                    $value: paddingXValue,
                    $type: 'dimension',
                },
            };

            componentsObject = {
                ...componentsObject,
                [`${newTokenNamePrefix}-top`]: {
                    $value: paddingYValue,
                    $type: 'dimension',
                },
            };

            componentsObject = {
                ...componentsObject,
                [`${newTokenNamePrefix}-bottom`]: {
                    $value: paddingYValue,
                    $type: 'dimension',
                },
            };

            componentsObject = {
                ...componentsObject,
                [`${newTokenNamePrefix}-text-size`]: {
                    $value: typeSizeValue,
                    $type: 'dimension',
                },
            };

            componentsObject = {
                ...componentsObject,
                [`${newTokenNamePrefix}-icon-size`]: {
                    $value: iconSizeValue,
                    $type: 'dimension',
                },
            };

            componentsObject = {
                ...componentsObject,
                [`${newTokenNamePrefix}-min-height`]: {
                    $value: componentMinHeightValue,
                    $type: 'dimension',
                },
            };

            componentsObject = {
                ...componentsObject,
                [`${newTokenNamePrefix}-radius`]: {
                    $value: scaledComponentRadiusValue,
                    $type: 'dimension',
                },
            };


        });
    });

    /** CONTAINER TOKENS */

    let containersObject = {};

    const containerPaddingMethod =
    containerPaddingMethodOption === 'typeScale'
        ? typeScale
        : spacingScaleFactor;

    let containerSizeArray = buildArray(
        containerSmallSizes,
        containerLargeSizes
    );

    let elevationsArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        containerBaseElevationIndex,
    );

    const radiusArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        containerBaseRadiusIndex,
        containerRadiusScaleFactor,
    );

    const paddingYIndexArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        containerBasePaddingYIndex,
        containerPaddingScaleFactor,
    );
    const paddingXIndexArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        containerBasePaddingXIndex,
        containerPaddingScaleFactor,
    );

    const containerPaddingMethodFormula =
        containerPaddingMethodOption === 'typeScale'
            ? typeScaleFormula
            : containerPaddingMethodOption === 'spacingScale'
                ? spacingFormula
                : undefined;

    containerSizeArray.map((size, i) => {
        const name = 'container';
        const decrementIndex = size * -1 - 1;
        let sizeName =
            size < 0 ? sizeNamesDecrement[decrementIndex] : sizeNamesIncrement[size];
        if (sizeName === undefined) sizeName = 'undefined';

        const sizeLabel = sizeName.replace(' (default)', '');
        const elevation = /*containerElevation*/ true
            ? calculateScale(
                baseElevationSize,
                elevationScaleFactor,
                elevationsArray[i],
                elevationScaleFormula,
            )
            : undefined;
        const offset = (elevation || 1) * (elevationOffsetY / 100);

        const paddingXvalue = calculateScale(
            baseSize,
            containerPaddingMethod,
            paddingXIndexArray[i],
            containerPaddingMethodFormula,
        );
        const paddingYvalue = calculateScale(
            baseSize,
            containerPaddingMethod,
            paddingYIndexArray[i],
            containerPaddingMethodFormula,
        );
        const radiusValue = calculateScale(
            baseRadiusSize,
            radiusScaleFactor,
            radiusArray[i],
            radiusScaleFormula,
        );
        const paddingX =
            baseScaleUnit === 'px'
                ? `${round(paddingXvalue)}${baseScaleUnit}`
                : `${round(paddingXvalue / baseSize, 3)}${baseScaleUnit}`;
        const paddingY =
            baseScaleUnit === 'px'
                ? `${round(paddingYvalue)}${baseScaleUnit}`
                : `${round(paddingYvalue / baseSize, 3)}${baseScaleUnit}`;
        const radius =
            baseScaleUnit === 'px'
                ? `${radiusValue}${baseScaleUnit}`
                : `${round(radiusValue / baseSize, 3)}${baseScaleUnit}`;

        containersObject = {
            ...containersObject,
            [`${name}-${sizeLabel}-left`]: {
                $value: paddingX,
                $type: 'dimension',
            },
            [`${name}-${sizeLabel}-right`]: {
                $value: paddingX,
                $type: 'dimension',
            },
            [`${name}-${sizeLabel}-top`]: {
                $value: paddingY,
                $type: 'dimension',
            },
            [`${name}-${sizeLabel}-bottom`]: {
                $value: paddingY,
                $type: 'dimension',
            },
            [`${name}-${sizeLabel}-radius`]: {
                $value: radius,
                $type: 'dimension',
            },
        };

        if (/*containerElevation*/ true) {
            const blurY =
                baseScaleUnit === 'px'
                    ? `${elevation}${baseScaleUnit}`
                    : `${round((elevation ||  1) / baseSize, 3)}${baseScaleUnit}`;
            const elevationY =
                baseScaleUnit === 'px'
                    ? `${offset}${baseScaleUnit}`
                    : `${round(offset / baseSize, 3)}${baseScaleUnit}`;

            containersObject = {
                ...containersObject,
                [`${name}-${sizeLabel}-elevation-blur`]: {
                    $value: blurY,
                    $type: 'dimension',
                },
                [`${name}-${sizeLabel}-elevation-offsetY`]: {
                    $value: elevationY,
                    $type: 'dimension',
                },
            };
        }
    });


    /** COLOR TOKENS */
    let colorsObject = {};
    // let colorsObject = {
    //     "color-red-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.9215686274509803,
    //                 0.9333333333333333
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFEBEE"
    //         }
    //     },
    //     "color-red-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.803921568627451,
    //                 0.8235294117647058
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFCDD2"
    //         }
    //     },
    //     "color-red-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9372549019607843,
    //                 0.6039215686274509,
    //                 0.6039215686274509
    //             ],
    //             "alpha": 1,
    //             "hex": "#EF9A9A"
    //         }
    //     },
    //     "color-red-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8980392156862745,
    //                 0.45098039215686275,
    //                 0.45098039215686275
    //             ],
    //             "alpha": 1,
    //             "hex": "#E57373"
    //         }
    //     },
    //     "color-red-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9372549019607843,
    //                 0.3254901960784314,
    //                 0.3137254901960784
    //             ],
    //             "alpha": 1,
    //             "hex": "#EF5350"
    //         }
    //     },
    //     "color-red-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9568627450980393,
    //                 0.2627450980392157,
    //                 0.21176470588235294
    //             ],
    //             "alpha": 1,
    //             "hex": "#F44336"
    //         }
    //     },
    //     "color-red-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8980392156862745,
    //                 0.2235294117647059,
    //                 0.20784313725490197
    //             ],
    //             "alpha": 1,
    //             "hex": "#E53935"
    //         }
    //     },
    //     "color-red-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8274509803921568,
    //                 0.1843137254901961,
    //                 0.1843137254901961
    //             ],
    //             "alpha": 1,
    //             "hex": "#D32F2F"
    //         }
    //     },
    //     "color-red-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7764705882352941,
    //                 0.1568627450980392,
    //                 0.1568627450980392
    //             ],
    //             "alpha": 1,
    //             "hex": "#C62828"
    //         }
    //     },
    //     "color-red-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7176470588235294,
    //                 0.10980392156862745,
    //                 0.10980392156862745
    //             ],
    //             "alpha": 1,
    //             "hex": "#B71C1C"
    //         }
    //     },
    //     "color-pink-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9882352941176471,
    //                 0.8941176470588236,
    //                 0.9254901960784314
    //             ],
    //             "alpha": 1,
    //             "hex": "#FCE4EC"
    //         }
    //     },
    //     "color-pink-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9725490196078431,
    //                 0.7333333333333333,
    //                 0.8156862745098039
    //             ],
    //             "alpha": 1,
    //             "hex": "#F8BBD0"
    //         }
    //     },
    //     "color-pink-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9568627450980393,
    //                 0.5607843137254902,
    //                 0.6941176470588235
    //             ],
    //             "alpha": 1,
    //             "hex": "#F48FB1"
    //         }
    //     },
    //     "color-pink-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9411764705882353,
    //                 0.3843137254901961,
    //                 0.5725490196078431
    //             ],
    //             "alpha": 1,
    //             "hex": "#F06292"
    //         }
    //     },
    //     "color-pink-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9254901960784314,
    //                 0.25098039215686274,
    //                 0.47843137254901963
    //             ],
    //             "alpha": 1,
    //             "hex": "#EC407A"
    //         }
    //     },
    //     "color-pink-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9137254901960784,
    //                 0.11764705882352941,
    //                 0.38823529411764707
    //             ],
    //             "alpha": 1,
    //             "hex": "#E91E63"
    //         }
    //     },
    //     "color-pink-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8470588235294118,
    //                 0.10588235294117647,
    //                 0.3764705882352941
    //             ],
    //             "alpha": 1,
    //             "hex": "#D81B60"
    //         }
    //     },
    //     "color-pink-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7607843137254902,
    //                 0.09411764705882353,
    //                 0.3568627450980392
    //             ],
    //             "alpha": 1,
    //             "hex": "#C2185B"
    //         }
    //     },
    //     "color-pink-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.6784313725490196,
    //                 0.0784313725490196,
    //                 0.3411764705882353
    //             ],
    //             "alpha": 1,
    //             "hex": "#AD1457"
    //         }
    //     },
    //     "color-pink-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.5333333333333333,
    //                 0.054901960784313725,
    //                 0.30980392156862746
    //             ],
    //             "alpha": 1,
    //             "hex": "#880E4F"
    //         }
    //     },
    //     "color-purple-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9529411764705882,
    //                 0.8980392156862745,
    //                 0.9607843137254902
    //             ],
    //             "alpha": 1,
    //             "hex": "#F3E5F5"
    //         }
    //     },
    //     "color-purple-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8823529411764706,
    //                 0.7450980392156863,
    //                 0.9058823529411765
    //             ],
    //             "alpha": 1,
    //             "hex": "#E1BEE7"
    //         }
    //     },
    //     "color-purple-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.807843137254902,
    //                 0.5764705882352941,
    //                 0.8470588235294118
    //             ],
    //             "alpha": 1,
    //             "hex": "#CE93D8"
    //         }
    //     },
    //     "color-purple-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7294117647058823,
    //                 0.40784313725490196,
    //                 0.7843137254901961
    //             ],
    //             "alpha": 1,
    //             "hex": "#BA68C8"
    //         }
    //     },
    //     "color-purple-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.6705882352941176,
    //                 0.2784313725490196,
    //                 0.7372549019607844
    //             ],
    //             "alpha": 1,
    //             "hex": "#AB47BC"
    //         }
    //     },
    //     "color-purple-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.611764705882353,
    //                 0.15294117647058825,
    //                 0.6901960784313725
    //             ],
    //             "alpha": 1,
    //             "hex": "#9C27B0"
    //         }
    //     },
    //     "color-purple-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.5568627450980392,
    //                 0.1411764705882353,
    //                 0.6666666666666666
    //             ],
    //             "alpha": 1,
    //             "hex": "#8E24AA"
    //         }
    //     },
    //     "color-purple-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.4823529411764706,
    //                 0.12156862745098039,
    //                 0.6352941176470588
    //             ],
    //             "alpha": 1,
    //             "hex": "#7B1FA2"
    //         }
    //     },
    //     "color-purple-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.41568627450980394,
    //                 0.10588235294117647,
    //                 0.6039215686274509
    //             ],
    //             "alpha": 1,
    //             "hex": "#6A1B9A"
    //         }
    //     },
    //     "color-purple-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.2901960784313726,
    //                 0.0784313725490196,
    //                 0.5490196078431373
    //             ],
    //             "alpha": 1,
    //             "hex": "#4A148C"
    //         }
    //     },
    //     "color-deep-purple-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9294117647058824,
    //                 0.9058823529411765,
    //                 0.9647058823529412
    //             ],
    //             "alpha": 1,
    //             "hex": "#EDE7F6"
    //         }
    //     },
    //     "color-deep-purple-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8196078431372549,
    //                 0.7686274509803922,
    //                 0.9137254901960784
    //             ],
    //             "alpha": 1,
    //             "hex": "#D1C4E9"
    //         }
    //     },
    //     "color-deep-purple-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7019607843137254,
    //                 0.615686274509804,
    //                 0.8588235294117647
    //             ],
    //             "alpha": 1,
    //             "hex": "#B39DDB"
    //         }
    //     },
    //     "color-deep-purple-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.5843137254901961,
    //                 0.4588235294117647,
    //                 0.803921568627451
    //             ],
    //             "alpha": 1,
    //             "hex": "#9575CD"
    //         }
    //     },
    //     "color-deep-purple-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.49411764705882355,
    //                 0.3411764705882353,
    //                 0.7607843137254902
    //             ],
    //             "alpha": 1,
    //             "hex": "#7E57C2"
    //         }
    //     },
    //     "color-deep-purple-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.403921568627451,
    //                 0.22745098039215686,
    //                 0.7176470588235294
    //             ],
    //             "alpha": 1,
    //             "hex": "#673AB7"
    //         }
    //     },
    //     "color-deep-purple-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.3686274509803922,
    //                 0.20784313725490197,
    //                 0.6941176470588235
    //             ],
    //             "alpha": 1,
    //             "hex": "#5E35B1"
    //         }
    //     },
    //     "color-deep-purple-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.3176470588235294,
    //                 0.17647058823529413,
    //                 0.6588235294117647
    //             ],
    //             "alpha": 1,
    //             "hex": "#512DA8"
    //         }
    //     },
    //     "color-deep-purple-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.27058823529411763,
    //                 0.15294117647058825,
    //                 0.6274509803921569
    //             ],
    //             "alpha": 1,
    //             "hex": "#4527A0"
    //         }
    //     },
    //     "color-deep-purple-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.19215686274509805,
    //                 0.10588235294117647,
    //                 0.5725490196078431
    //             ],
    //             "alpha": 1,
    //             "hex": "#311B92"
    //         }
    //     },
    //     "color-indigo-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9098039215686274,
    //                 0.9176470588235294,
    //                 0.9647058823529412
    //             ],
    //             "alpha": 1,
    //             "hex": "#E8EAF6"
    //         }
    //     },
    //     "color-indigo-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7725490196078432,
    //                 0.792156862745098,
    //                 0.9137254901960784
    //             ],
    //             "alpha": 1,
    //             "hex": "#C5CAE9"
    //         }
    //     },
    //     "color-indigo-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.6235294117647059,
    //                 0.6588235294117647,
    //                 0.8549019607843137
    //             ],
    //             "alpha": 1,
    //             "hex": "#9FA8DA"
    //         }
    //     },
    //     "color-indigo-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.4745098039215686,
    //                 0.5254901960784314,
    //                 0.796078431372549
    //             ],
    //             "alpha": 1,
    //             "hex": "#7986CB"
    //         }
    //     },
    //     "color-indigo-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.3607843137254902,
    //                 0.4196078431372549,
    //                 0.7529411764705882
    //             ],
    //             "alpha": 1,
    //             "hex": "#5C6BC0"
    //         }
    //     },
    //     "color-indigo-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.24705882352941178,
    //                 0.3176470588235294,
    //                 0.7098039215686275
    //             ],
    //             "alpha": 1,
    //             "hex": "#3F51B5"
    //         }
    //     },
    //     "color-indigo-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.2235294117647059,
    //                 0.28627450980392155,
    //                 0.6705882352941176
    //             ],
    //             "alpha": 1,
    //             "hex": "#3949AB"
    //         }
    //     },
    //     "color-indigo-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.18823529411764706,
    //                 0.24705882352941178,
    //                 0.6235294117647059
    //             ],
    //             "alpha": 1,
    //             "hex": "#303F9F"
    //         }
    //     },
    //     "color-indigo-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.1568627450980392,
    //                 0.20784313725490197,
    //                 0.5764705882352941
    //             ],
    //             "alpha": 1,
    //             "hex": "#283593"
    //         }
    //     },
    //     "color-indigo-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.10196078431372549,
    //                 0.13725490196078433,
    //                 0.49411764705882355
    //             ],
    //             "alpha": 1,
    //             "hex": "#1A237E"
    //         }
    //     },
    //     "color-blue-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8901960784313725,
    //                 0.9490196078431372,
    //                 0.9921568627450981
    //             ],
    //             "alpha": 1,
    //             "hex": "#E3F2FD"
    //         }
    //     },
    //     "color-blue-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7333333333333333,
    //                 0.8705882352941177,
    //                 0.984313725490196
    //             ],
    //             "alpha": 1,
    //             "hex": "#BBDEFB"
    //         }
    //     },
    //     "color-blue-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.5647058823529412,
    //                 0.792156862745098,
    //                 0.9764705882352941
    //             ],
    //             "alpha": 1,
    //             "hex": "#90CAF9"
    //         }
    //     },
    //     "color-blue-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.39215686274509803,
    //                 0.7098039215686275,
    //                 0.9647058823529412
    //             ],
    //             "alpha": 1,
    //             "hex": "#64B5F6"
    //         }
    //     },
    //     "color-blue-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.25882352941176473,
    //                 0.6470588235294118,
    //                 0.9607843137254902
    //             ],
    //             "alpha": 1,
    //             "hex": "#42A5F5"
    //         }
    //     },
    //     "color-blue-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.12941176470588237,
    //                 0.5882352941176471,
    //                 0.9529411764705882
    //             ],
    //             "alpha": 1,
    //             "hex": "#2196F3"
    //         }
    //     },
    //     "color-blue-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.11764705882352941,
    //                 0.5333333333333333,
    //                 0.8980392156862745
    //             ],
    //             "alpha": 1,
    //             "hex": "#1E88E5"
    //         }
    //     },
    //     "color-blue-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.09803921568627451,
    //                 0.4627450980392157,
    //                 0.8235294117647058
    //             ],
    //             "alpha": 1,
    //             "hex": "#1976D2"
    //         }
    //     },
    //     "color-blue-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.08235294117647059,
    //                 0.396078431372549,
    //                 0.7529411764705882
    //             ],
    //             "alpha": 1,
    //             "hex": "#1565C0"
    //         }
    //     },
    //     "color-blue-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.050980392156862744,
    //                 0.2784313725490196,
    //                 0.6313725490196078
    //             ],
    //             "alpha": 1,
    //             "hex": "#0D47A1"
    //         }
    //     },
    //     "color-light-blue-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8823529411764706,
    //                 0.9607843137254902,
    //                 0.996078431372549
    //             ],
    //             "alpha": 1,
    //             "hex": "#E1F5FE"
    //         }
    //     },
    //     "color-light-blue-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7019607843137254,
    //                 0.8980392156862745,
    //                 0.9882352941176471
    //             ],
    //             "alpha": 1,
    //             "hex": "#B3E5FC"
    //         }
    //     },
    //     "color-light-blue-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.5058823529411764,
    //                 0.8313725490196079,
    //                 0.9803921568627451
    //             ],
    //             "alpha": 1,
    //             "hex": "#81D4FA"
    //         }
    //     },
    //     "color-light-blue-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.30980392156862746,
    //                 0.7647058823529411,
    //                 0.9686274509803922
    //             ],
    //             "alpha": 1,
    //             "hex": "#4FC3F7"
    //         }
    //     },
    //     "color-light-blue-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.1607843137254902,
    //                 0.7137254901960784,
    //                 0.9647058823529412
    //             ],
    //             "alpha": 1,
    //             "hex": "#29B6F6"
    //         }
    //     },
    //     "color-light-blue-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.011764705882352941,
    //                 0.6627450980392157,
    //                 0.9568627450980393
    //             ],
    //             "alpha": 1,
    //             "hex": "#03A9F4"
    //         }
    //     },
    //     "color-light-blue-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.011764705882352941,
    //                 0.6078431372549019,
    //                 0.8980392156862745
    //             ],
    //             "alpha": 1,
    //             "hex": "#039BE5"
    //         }
    //     },
    //     "color-light-blue-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.00784313725490196,
    //                 0.5333333333333333,
    //                 0.8196078431372549
    //             ],
    //             "alpha": 1,
    //             "hex": "#0288D1"
    //         }
    //     },
    //     "color-light-blue-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.00784313725490196,
    //                 0.4666666666666667,
    //                 0.7411764705882353
    //             ],
    //             "alpha": 1,
    //             "hex": "#0277BD"
    //         }
    //     },
    //     "color-light-blue-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.00392156862745098,
    //                 0.3411764705882353,
    //                 0.6078431372549019
    //             ],
    //             "alpha": 1,
    //             "hex": "#01579B"
    //         }
    //     },
    //     "color-cyan-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8784313725490196,
    //                 0.9686274509803922,
    //                 0.9803921568627451
    //             ],
    //             "alpha": 1,
    //             "hex": "#E0F7FA"
    //         }
    //     },
    //     "color-cyan-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.6980392156862745,
    //                 0.9215686274509803,
    //                 0.9490196078431372
    //             ],
    //             "alpha": 1,
    //             "hex": "#B2EBF2"
    //         }
    //     },
    //     "color-cyan-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.5019607843137255,
    //                 0.8705882352941177,
    //                 0.9176470588235294
    //             ],
    //             "alpha": 1,
    //             "hex": "#80DEEA"
    //         }
    //     },
    //     "color-cyan-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.30196078431372547,
    //                 0.8156862745098039,
    //                 0.8823529411764706
    //             ],
    //             "alpha": 1,
    //             "hex": "#4DD0E1"
    //         }
    //     },
    //     "color-cyan-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.14901960784313725,
    //                 0.7764705882352941,
    //                 0.8549019607843137
    //             ],
    //             "alpha": 1,
    //             "hex": "#26C6DA"
    //         }
    //     },
    //     "color-cyan-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0,
    //                 0.7372549019607844,
    //                 0.8313725490196079
    //             ],
    //             "alpha": 1,
    //             "hex": "#00BCD4"
    //         }
    //     },
    //     "color-cyan-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0,
    //                 0.6745098039215687,
    //                 0.7568627450980392
    //             ],
    //             "alpha": 1,
    //             "hex": "#00ACC1"
    //         }
    //     },
    //     "color-cyan-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0,
    //                 0.592156862745098,
    //                 0.6549019607843137
    //             ],
    //             "alpha": 1,
    //             "hex": "#0097A7"
    //         }
    //     },
    //     "color-cyan-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0,
    //                 0.5137254901960784,
    //                 0.5607843137254902
    //             ],
    //             "alpha": 1,
    //             "hex": "#00838F"
    //         }
    //     },
    //     "color-cyan-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0,
    //                 0.3764705882352941,
    //                 0.39215686274509803
    //             ],
    //             "alpha": 1,
    //             "hex": "#006064"
    //         }
    //     },
    //     "color-teal-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8784313725490196,
    //                 0.9490196078431372,
    //                 0.9450980392156862
    //             ],
    //             "alpha": 1,
    //             "hex": "#E0F2F1"
    //         }
    //     },
    //     "color-teal-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.6980392156862745,
    //                 0.8745098039215686,
    //                 0.8588235294117647
    //             ],
    //             "alpha": 1,
    //             "hex": "#B2DFDB"
    //         }
    //     },
    //     "color-teal-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.5019607843137255,
    //                 0.796078431372549,
    //                 0.7686274509803922
    //             ],
    //             "alpha": 1,
    //             "hex": "#80CBC4"
    //         }
    //     },
    //     "color-teal-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.30196078431372547,
    //                 0.7137254901960784,
    //                 0.6745098039215687
    //             ],
    //             "alpha": 1,
    //             "hex": "#4DB6AC"
    //         }
    //     },
    //     "color-teal-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.14901960784313725,
    //                 0.6509803921568628,
    //                 0.6039215686274509
    //             ],
    //             "alpha": 1,
    //             "hex": "#26A69A"
    //         }
    //     },
    //     "color-teal-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0,
    //                 0.5882352941176471,
    //                 0.5333333333333333
    //             ],
    //             "alpha": 1,
    //             "hex": "#009688"
    //         }
    //     },
    //     "color-teal-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0,
    //                 0.5372549019607843,
    //                 0.4823529411764706
    //             ],
    //             "alpha": 1,
    //             "hex": "#00897B"
    //         }
    //     },
    //     "color-teal-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0,
    //                 0.4745098039215686,
    //                 0.4196078431372549
    //             ],
    //             "alpha": 1,
    //             "hex": "#00796B"
    //         }
    //     },
    //     "color-teal-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0,
    //                 0.4117647058823529,
    //                 0.3607843137254902
    //             ],
    //             "alpha": 1,
    //             "hex": "#00695C"
    //         }
    //     },
    //     "color-teal-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0,
    //                 0.30196078431372547,
    //                 0.25098039215686274
    //             ],
    //             "alpha": 1,
    //             "hex": "#004D40"
    //         }
    //     },
    //     "color-green-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9098039215686274,
    //                 0.9607843137254902,
    //                 0.9137254901960784
    //             ],
    //             "alpha": 1,
    //             "hex": "#E8F5E9"
    //         }
    //     },
    //     "color-green-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7843137254901961,
    //                 0.9019607843137255,
    //                 0.788235294117647
    //             ],
    //             "alpha": 1,
    //             "hex": "#C8E6C9"
    //         }
    //     },
    //     "color-green-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.6470588235294118,
    //                 0.8392156862745098,
    //                 0.6549019607843137
    //             ],
    //             "alpha": 1,
    //             "hex": "#A5D6A7"
    //         }
    //     },
    //     "color-green-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.5058823529411764,
    //                 0.7803921568627451,
    //                 0.5176470588235295
    //             ],
    //             "alpha": 1,
    //             "hex": "#81C784"
    //         }
    //     },
    //     "color-green-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.4,
    //                 0.7333333333333333,
    //                 0.41568627450980394
    //             ],
    //             "alpha": 1,
    //             "hex": "#66BB6A"
    //         }
    //     },
    //     "color-green-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.2980392156862745,
    //                 0.6862745098039216,
    //                 0.3137254901960784
    //             ],
    //             "alpha": 1,
    //             "hex": "#4CAF50"
    //         }
    //     },
    //     "color-green-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.2627450980392157,
    //                 0.6274509803921569,
    //                 0.2784313725490196
    //             ],
    //             "alpha": 1,
    //             "hex": "#43A047"
    //         }
    //     },
    //     "color-green-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.2196078431372549,
    //                 0.5568627450980392,
    //                 0.23529411764705882
    //             ],
    //             "alpha": 1,
    //             "hex": "#388E3C"
    //         }
    //     },
    //     "color-green-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.1803921568627451,
    //                 0.49019607843137253,
    //                 0.19607843137254902
    //             ],
    //             "alpha": 1,
    //             "hex": "#2E7D32"
    //         }
    //     },
    //     "color-green-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.10588235294117647,
    //                 0.3686274509803922,
    //                 0.12549019607843137
    //             ],
    //             "alpha": 1,
    //             "hex": "#1B5E20"
    //         }
    //     },
    //     "color-light-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9450980392156862,
    //                 0.9725490196078431,
    //                 0.9137254901960784
    //             ],
    //             "alpha": 1,
    //             "hex": "#F1F8E9"
    //         }
    //     },
    //     "color-light-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8627450980392157,
    //                 0.9294117647058824,
    //                 0.7843137254901961
    //             ],
    //             "alpha": 1,
    //             "hex": "#DCEDC8"
    //         }
    //     },
    //     "color-light-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7725490196078432,
    //                 0.8823529411764706,
    //                 0.6470588235294118
    //             ],
    //             "alpha": 1,
    //             "hex": "#C5E1A5"
    //         }
    //     },
    //     "color-light-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.6823529411764706,
    //                 0.8352941176470589,
    //                 0.5058823529411764
    //             ],
    //             "alpha": 1,
    //             "hex": "#AED581"
    //         }
    //     },
    //     "color-light-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.611764705882353,
    //                 0.8,
    //                 0.396078431372549
    //             ],
    //             "alpha": 1,
    //             "hex": "#9CCC65"
    //         }
    //     },
    //     "color-light-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.5450980392156862,
    //                 0.7647058823529411,
    //                 0.2901960784313726
    //             ],
    //             "alpha": 1,
    //             "hex": "#8BC34A"
    //         }
    //     },
    //     "color-light-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.48627450980392156,
    //                 0.7019607843137254,
    //                 0.25882352941176473
    //             ],
    //             "alpha": 1,
    //             "hex": "#7CB342"
    //         }
    //     },
    //     "color-light-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.40784313725490196,
    //                 0.6235294117647059,
    //                 0.2196078431372549
    //             ],
    //             "alpha": 1,
    //             "hex": "#689F38"
    //         }
    //     },
    //     "color-light-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.3333333333333333,
    //                 0.5450980392156862,
    //                 0.1843137254901961
    //             ],
    //             "alpha": 1,
    //             "hex": "#558B2F"
    //         }
    //     },
    //     "color-light-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.2,
    //                 0.4117647058823529,
    //                 0.11764705882352941
    //             ],
    //             "alpha": 1,
    //             "hex": "#33691E"
    //         }
    //     },
    //     "color-lime-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9764705882352941,
    //                 0.984313725490196,
    //                 0.9058823529411765
    //             ],
    //             "alpha": 1,
    //             "hex": "#F9FBE7"
    //         }
    //     },
    //     "color-lime-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9411764705882353,
    //                 0.9568627450980393,
    //                 0.7647058823529411
    //             ],
    //             "alpha": 1,
    //             "hex": "#F0F4C3"
    //         }
    //     },
    //     "color-lime-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9019607843137255,
    //                 0.9333333333333333,
    //                 0.611764705882353
    //             ],
    //             "alpha": 1,
    //             "hex": "#E6EE9C"
    //         }
    //     },
    //     "color-lime-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8627450980392157,
    //                 0.9058823529411765,
    //                 0.4588235294117647
    //             ],
    //             "alpha": 1,
    //             "hex": "#DCE775"
    //         }
    //     },
    //     "color-lime-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8313725490196079,
    //                 0.8823529411764706,
    //                 0.3411764705882353
    //             ],
    //             "alpha": 1,
    //             "hex": "#D4E157"
    //         }
    //     },
    //     "color-lime-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.803921568627451,
    //                 0.8627450980392157,
    //                 0.2235294117647059
    //             ],
    //             "alpha": 1,
    //             "hex": "#CDDC39"
    //         }
    //     },
    //     "color-lime-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7529411764705882,
    //                 0.792156862745098,
    //                 0.2
    //             ],
    //             "alpha": 1,
    //             "hex": "#C0CA33"
    //         }
    //     },
    //     "color-lime-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.6862745098039216,
    //                 0.7058823529411765,
    //                 0.16862745098039217
    //             ],
    //             "alpha": 1,
    //             "hex": "#AFB42B"
    //         }
    //     },
    //     "color-lime-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.6196078431372549,
    //                 0.615686274509804,
    //                 0.1411764705882353
    //             ],
    //             "alpha": 1,
    //             "hex": "#9E9D24"
    //         }
    //     },
    //     "color-lime-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.5098039215686274,
    //                 0.4666666666666667,
    //                 0.09019607843137255
    //             ],
    //             "alpha": 1,
    //             "hex": "#827717"
    //         }
    //     },
    //     "color-yellow-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.9921568627450981,
    //                 0.9058823529411765
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFFDE7"
    //         }
    //     },
    //     "color-yellow-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.9764705882352941,
    //                 0.7686274509803922
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFF9C4"
    //         }
    //     },
    //     "color-yellow-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.9607843137254902,
    //                 0.615686274509804
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFF59D"
    //         }
    //     },
    //     "color-yellow-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.9450980392156862,
    //                 0.4627450980392157
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFF176"
    //         }
    //     },
    //     "color-yellow-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.9333333333333333,
    //                 0.34509803921568627
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFEE58"
    //         }
    //     },
    //     "color-yellow-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.9215686274509803,
    //                 0.23137254901960785
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFEB3B"
    //         }
    //     },
    //     "color-yellow-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9921568627450981,
    //                 0.8470588235294118,
    //                 0.20784313725490197
    //             ],
    //             "alpha": 1,
    //             "hex": "#FDD835"
    //         }
    //     },
    //     "color-yellow-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.984313725490196,
    //                 0.7529411764705882,
    //                 0.17647058823529413
    //             ],
    //             "alpha": 1,
    //             "hex": "#FBC02D"
    //         }
    //     },
    //     "color-yellow-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9764705882352941,
    //                 0.6588235294117647,
    //                 0.1450980392156863
    //             ],
    //             "alpha": 1,
    //             "hex": "#F9A825"
    //         }
    //     },
    //     "color-yellow-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9607843137254902,
    //                 0.4980392156862745,
    //                 0.09019607843137255
    //             ],
    //             "alpha": 1,
    //             "hex": "#F57F17"
    //         }
    //     },
    //     "color-amber-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.9725490196078431,
    //                 0.8823529411764706
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFF8E1"
    //         }
    //     },
    //     "color-amber-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.9254901960784314,
    //                 0.7019607843137254
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFECB3"
    //         }
    //     },
    //     "color-amber-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.8784313725490196,
    //                 0.5098039215686274
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFE082"
    //         }
    //     },
    //     "color-amber-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.8352941176470589,
    //                 0.30980392156862746
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFD54F"
    //         }
    //     },
    //     "color-amber-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.792156862745098,
    //                 0.1568627450980392
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFCA28"
    //         }
    //     },
    //     "color-amber-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.7568627450980392,
    //                 0.027450980392156862
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFC107"
    //         }
    //     },
    //     "color-amber-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.7019607843137254,
    //                 0
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFB300"
    //         }
    //     },
    //     "color-amber-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.6274509803921569,
    //                 0
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFA000"
    //         }
    //     },
    //     "color-amber-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.5607843137254902,
    //                 0
    //             ],
    //             "alpha": 1,
    //             "hex": "#FF8F00"
    //         }
    //     },
    //     "color-amber-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.43529411764705883,
    //                 0
    //             ],
    //             "alpha": 1,
    //             "hex": "#FF6F00"
    //         }
    //     },
    //     "color-orange-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.9529411764705882,
    //                 0.8784313725490196
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFF3E0"
    //         }
    //     },
    //     "color-orange-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.8784313725490196,
    //                 0.6980392156862745
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFE0B2"
    //         }
    //     },
    //     "color-orange-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.8,
    //                 0.5019607843137255
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFCC80"
    //         }
    //     },
    //     "color-orange-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.7176470588235294,
    //                 0.30196078431372547
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFB74D"
    //         }
    //     },
    //     "color-orange-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.6549019607843137,
    //                 0.14901960784313725
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFA726"
    //         }
    //     },
    //     "color-orange-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.596078431372549,
    //                 0
    //             ],
    //             "alpha": 1,
    //             "hex": "#FF9800"
    //         }
    //     },
    //     "color-orange-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.984313725490196,
    //                 0.5490196078431373,
    //                 0
    //             ],
    //             "alpha": 1,
    //             "hex": "#FB8C00"
    //         }
    //     },
    //     "color-orange-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9607843137254902,
    //                 0.48627450980392156,
    //                 0
    //             ],
    //             "alpha": 1,
    //             "hex": "#F57C00"
    //         }
    //     },
    //     "color-orange-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9372549019607843,
    //                 0.4235294117647059,
    //                 0
    //             ],
    //             "alpha": 1,
    //             "hex": "#EF6C00"
    //         }
    //     },
    //     "color-orange-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9019607843137255,
    //                 0.3176470588235294,
    //                 0
    //             ],
    //             "alpha": 1,
    //             "hex": "#E65100"
    //         }
    //     },
    //     "color-deep-orange-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.984313725490196,
    //                 0.9137254901960784,
    //                 0.9058823529411765
    //             ],
    //             "alpha": 1,
    //             "hex": "#FBE9E7"
    //         }
    //     },
    //     "color-deep-orange-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.8,
    //                 0.7372549019607844
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFCCBC"
    //         }
    //     },
    //     "color-deep-orange-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.6705882352941176,
    //                 0.5686274509803921
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFAB91"
    //         }
    //     },
    //     "color-deep-orange-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.5411764705882353,
    //                 0.396078431372549
    //             ],
    //             "alpha": 1,
    //             "hex": "#FF8A65"
    //         }
    //     },
    //     "color-deep-orange-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.4392156862745098,
    //                 0.2627450980392157
    //             ],
    //             "alpha": 1,
    //             "hex": "#FF7043"
    //         }
    //     },
    //     "color-deep-orange-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 0.3411764705882353,
    //                 0.13333333333333333
    //             ],
    //             "alpha": 1,
    //             "hex": "#FF5722"
    //         }
    //     },
    //     "color-deep-orange-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9568627450980393,
    //                 0.3176470588235294,
    //                 0.11764705882352941
    //             ],
    //             "alpha": 1,
    //             "hex": "#F4511E"
    //         }
    //     },
    //     "color-deep-orange-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9019607843137255,
    //                 0.2901960784313726,
    //                 0.09803921568627451
    //             ],
    //             "alpha": 1,
    //             "hex": "#E64A19"
    //         }
    //     },
    //     "color-deep-orange-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8470588235294118,
    //                 0.2627450980392157,
    //                 0.08235294117647059
    //             ],
    //             "alpha": 1,
    //             "hex": "#D84315"
    //         }
    //     },
    //     "color-deep-orange-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7490196078431373,
    //                 0.21176470588235294,
    //                 0.047058823529411764
    //             ],
    //             "alpha": 1,
    //             "hex": "#BF360C"
    //         }
    //     },
    //     "color-brown-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9372549019607843,
    //                 0.9215686274509803,
    //                 0.9137254901960784
    //             ],
    //             "alpha": 1,
    //             "hex": "#EFEBE9"
    //         }
    //     },
    //     "color-brown-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8431372549019608,
    //                 0.8,
    //                 0.7843137254901961
    //             ],
    //             "alpha": 1,
    //             "hex": "#D7CCC8"
    //         }
    //     },
    //     "color-brown-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7372549019607844,
    //                 0.6666666666666666,
    //                 0.6431372549019608
    //             ],
    //             "alpha": 1,
    //             "hex": "#BCAAA4"
    //         }
    //     },
    //     "color-brown-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.6313725490196078,
    //                 0.5333333333333333,
    //                 0.4980392156862745
    //             ],
    //             "alpha": 1,
    //             "hex": "#A1887F"
    //         }
    //     },
    //     "color-brown-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.5529411764705883,
    //                 0.43137254901960786,
    //                 0.38823529411764707
    //             ],
    //             "alpha": 1,
    //             "hex": "#8D6E63"
    //         }
    //     },
    //     "color-brown-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.4745098039215686,
    //                 0.3333333333333333,
    //                 0.2823529411764706
    //             ],
    //             "alpha": 1,
    //             "hex": "#795548"
    //         }
    //     },
    //     "color-brown-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.42745098039215684,
    //                 0.2980392156862745,
    //                 0.2549019607843137
    //             ],
    //             "alpha": 1,
    //             "hex": "#6D4C41"
    //         }
    //     },
    //     "color-brown-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.36470588235294116,
    //                 0.25098039215686274,
    //                 0.21568627450980393
    //             ],
    //             "alpha": 1,
    //             "hex": "#5D4037"
    //         }
    //     },
    //     "color-brown-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.3058823529411765,
    //                 0.20392156862745098,
    //                 0.1803921568627451
    //             ],
    //             "alpha": 1,
    //             "hex": "#4E342E"
    //         }
    //     },
    //     "color-brown-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.24313725490196078,
    //                 0.15294117647058825,
    //                 0.13725490196078433
    //             ],
    //             "alpha": 1,
    //             "hex": "#3E2723"
    //         }
    //     },
    //     "color-gray-000": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 1,
    //                 1,
    //                 1
    //             ],
    //             "alpha": 1,
    //             "hex": "#FFFFFF"
    //         }
    //     },
    //     "color-gray-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9803921568627451,
    //                 0.9803921568627451,
    //                 0.9803921568627451
    //             ],
    //             "alpha": 1,
    //             "hex": "#FAFAFA"
    //         }
    //     },
    //     "color-gray-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9607843137254902,
    //                 0.9607843137254902,
    //                 0.9607843137254902
    //             ],
    //             "alpha": 1,
    //             "hex": "#F5F5F5"
    //         }
    //     },
    //     "color-gray-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9333333333333333,
    //                 0.9333333333333333,
    //                 0.9333333333333333
    //             ],
    //             "alpha": 1,
    //             "hex": "#EEEEEE"
    //         }
    //     },
    //     "color-gray-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8784313725490196,
    //                 0.8784313725490196,
    //                 0.8784313725490196
    //             ],
    //             "alpha": 1,
    //             "hex": "#E0E0E0"
    //         }
    //     },
    //     "color-gray-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.7411764705882353,
    //                 0.7411764705882353,
    //                 0.7411764705882353
    //             ],
    //             "alpha": 1,
    //             "hex": "#BDBDBD"
    //         }
    //     },
    //     "color-gray-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.6196078431372549,
    //                 0.6196078431372549,
    //                 0.6196078431372549
    //             ],
    //             "alpha": 1,
    //             "hex": "#9E9E9E"
    //         }
    //     },
    //     "color-gray-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.4588235294117647,
    //                 0.4588235294117647,
    //                 0.4588235294117647
    //             ],
    //             "alpha": 1,
    //             "hex": "#757575"
    //         }
    //     },
    //     "color-gray-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.3803921568627451,
    //                 0.3803921568627451,
    //                 0.3803921568627451
    //             ],
    //             "alpha": 1,
    //             "hex": "#616161"
    //         }
    //     },
    //     "color-gray-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.25882352941176473,
    //                 0.25882352941176473,
    //                 0.25882352941176473
    //             ],
    //             "alpha": 1,
    //             "hex": "#424242"
    //         }
    //     },
    //     "color-gray-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.12941176470588237,
    //                 0.12941176470588237,
    //                 0.12941176470588237
    //             ],
    //             "alpha": 1,
    //             "hex": "#212121"
    //         }
    //     },
    //     "color-gray-1000": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0,
    //                 0,
    //                 0
    //             ],
    //             "alpha": 1,
    //             "hex": "#000000"
    //         }
    //     },
    //     "color-blue-gray-50": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.9254901960784314,
    //                 0.9372549019607843,
    //                 0.9450980392156862
    //             ],
    //             "alpha": 1,
    //             "hex": "#ECEFF1"
    //         }
    //     },
    //     "color-blue-gray-100": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.8117647058823529,
    //                 0.8470588235294118,
    //                 0.8627450980392157
    //             ],
    //             "alpha": 1,
    //             "hex": "#CFD8DC"
    //         }
    //     },
    //     "color-blue-gray-200": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.6901960784313725,
    //                 0.7450980392156863,
    //                 0.7725490196078432
    //             ],
    //             "alpha": 1,
    //             "hex": "#B0BEC5"
    //         }
    //     },
    //     "color-blue-gray-300": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.5647058823529412,
    //                 0.6431372549019608,
    //                 0.6823529411764706
    //             ],
    //             "alpha": 1,
    //             "hex": "#90A4AE"
    //         }
    //     },
    //     "color-blue-gray-400": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.47058823529411764,
    //                 0.5647058823529412,
    //                 0.611764705882353
    //             ],
    //             "alpha": 1,
    //             "hex": "#78909C"
    //         }
    //     },
    //     "color-blue-gray-500": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.3764705882352941,
    //                 0.49019607843137253,
    //                 0.5450980392156862
    //             ],
    //             "alpha": 1,
    //             "hex": "#607D8B"
    //         }
    //     },
    //     "color-blue-gray-600": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.32941176470588235,
    //                 0.43137254901960786,
    //                 0.47843137254901963
    //             ],
    //             "alpha": 1,
    //             "hex": "#546E7A"
    //         }
    //     },
    //     "color-blue-gray-700": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.27058823529411763,
    //                 0.35294117647058826,
    //                 0.39215686274509803
    //             ],
    //             "alpha": 1,
    //             "hex": "#455A64"
    //         }
    //     },
    //     "color-blue-gray-800": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.21568627450980393,
    //                 0.2784313725490196,
    //                 0.30980392156862746
    //             ],
    //             "alpha": 1,
    //             "hex": "#37474F"
    //         }
    //     },
    //     "color-blue-gray-900": {
    //         "$type": "color",
    //         "$value": {
    //             "colorSpace": "srgb",
    //             "components": [
    //                 0.14901960784313725,
    //                 0.19607843137254902,
    //                 0.2196078431372549
    //             ],
    //             "alpha": 1,
    //             "hex": "#263238"
    //         }
    //     }
    // };

    const colorShadeIndex = [
        [-.8, 100],
        [-.6, 200],
        [-.4, 300],
        [-.2, 400],
        [  0, 500],
        [ .2, 600],
        [ .4, 700],
        [ .6, 800],
        [ .8, 900],
    ]
    colorArray.forEach(color => {
        colorShadeIndex.forEach(([index, shade]) => {
            const shadedColor = pSBC(index, color.color)
            colorsObject = {
                ...colorsObject,
                [`color-${color.name}-${shade}`]: {
                    "$type": "color",
                    "$value": {
                        "colorSpace": "srgb",
                        "components": hex2rgb(shadedColor!),
                        "alpha": 1,
                        "hex": shadedColor
                    }
                }
            }
        })
    });

    return {
        [typeKey]: typographyObject,
        [iconsKey]: iconsObject,
        [spacingKey]: spacingObject,
        [radiusKey]: radiusObject,
        [elevationKey]: elevationObject,
        [textIconKey]: textIconGapObject,
        [componentKey]: componentsObject,
        [containerKey]: containersObject,
        [colorKey]: colorsObject,
    }


    /** RETURN TOKENS */

};

type NumberModule = {
    $type: 'number'
    $value: number | string
}
type DimensionModule = {
    $type: 'dimension'
    $value: {
        value: number | string
        unit: string
    }
}
type ColorModule = {
    $type: 'color'
    $value: {
        colorSpace: 'srgb',
        components: [number, number, number],
        alpha: number,
        hex: string
    }
}

export interface W3cDesignToken {
    [key: string]: {
        [key: string]: NumberModule | DimensionModule | ColorModule
    }
}

export default createTokens;
