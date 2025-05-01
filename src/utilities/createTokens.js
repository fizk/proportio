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
import round from './round';

const createTokens = () => {

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

    /** TOKEN KEYS */
    const typeKey = 'typography';
    const iconsKey = 'iconography';
    const spacingKey = 'spacing';
    const elevationKey = 'elevation';
    const radiusKey = 'radius';
    const textIconKey = 'text-icon-gap';
    const componentKey = 'component';
    const containerKey = 'container';


    /** TYPOGRAPHY TOKENS */
    let typographyObject = {
        'text-lineheight': {
            $value: `${typeScale}`,
            $type: 'number'
        },
        'text-base': {
            $value: `${baseSize}px`,
            $type: 'dimension'
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
                $value: `${value}`,
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
                $value: `${value}`,
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
    let radiusObject = [];
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
                $value: `${value}`,
                $type: 'dimension',
            },
        };
    });

    /** ELEVATION TOKENS */
    let elevationObject = [];
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
                $value: `${valueX}`,
                $type: 'dimension',
            },
        }
        elevationObject = {
            ...elevationObject,
            [nameY]: {
                $value: `${valueY}`,
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
                : 'none';
    const gapMethod =
        textIconGapScaleFormula === 'typeScale'
            ? typeScaleFormula
            : textIconGapScaleFormula === 'spacingScale'
                ? spacingFormula
                : 'none';

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
                : 'none';
    const componentGapMethod =
        textIconGapScaleFormula === 'typeScale'
            ? typeScaleFormula
            : textIconGapScaleFormula === 'spacingScale'
                ? spacingFormula
                : 'none';
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
        const sizeName =
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
        const offset = elevation * (elevationOffsetY / 100);

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
                    : `${round(elevation / baseSize, 3)}${baseScaleUnit}`;
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


    /** RETURN TOKENS */
    return {
        [typeKey]: typographyObject,
        [iconsKey]: iconsObject,
        [spacingKey]: spacingObject,
        [radiusKey]: radiusObject,
        [elevationKey]: elevationObject,
        [textIconKey]: textIconGapObject,
        [componentKey]: componentsObject,
        [containerKey]: containersObject,
    };
};

export default createTokens;
