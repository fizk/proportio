import React from 'react';
import { useRecoilState } from 'recoil';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import round from '../utilities/round';
import capitalize from '../utilities/capitalize';
import '../styles/container.css';

export default function ContainerElement(props) {
    const elevation = props.elevation;
    const radius = props.radius;
    const offsetY = props.offsetY;
    const spec = props.spec;
    const sizeName = props.sizeName;
    const containerElevation = props.containerElevation;
    const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState);
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);

    const paddingY = props.paddingY;
    const paddingX = props.paddingX;
    const margin = elevation > 0 ? elevation : 4;

    const elevationSpec = (
        <div className="containerspecElevation specs">
            {`Blur: ${baseScaleUnit === 'px'
                    ? round(elevation)
                    : round(elevation / baseSize, 3)
                }${baseScaleUnit}`}
            <br />
            {`Distance: ${baseScaleUnit === 'px' ? round(offsetY) : round(offsetY / baseSize, 3)
                }${baseScaleUnit}`}
        </div>
    );

    const elevationSpecAnnotation = containerElevation ? elevationSpec : ' ';
    const specAnnotations = (
        <>
            <div className="containerspecPaddingX specs">
                {' '}
                {`Pad-X: ${paddingX}${baseScaleUnit}`}{' '}
            </div>
            <div className="containerspecPaddingY specs">
                {' '}
                {`Pad-Y: ${paddingY}${baseScaleUnit}`}{' '}
            </div>
            <div className="containerspecRadius specs">
                {' '}
                {`R: ${radius}${baseScaleUnit}`}{' '}
            </div>
            {elevationSpecAnnotation}
        </>
    );
    const showSpecs = spec ? specAnnotations : '';

    return (
        <div
            className="specRowItem"
            key={`containerSpecItem${sizeName}${offsetY}${elevation}`}
        >
            <h5> {capitalize(sizeName)} </h5>
            <div className={spec ? 'containerSpecWrapper' : 'containerWrapper'}>
                <div
                    className="containerElement apply-font-main"
                    style={{
                        boxShadow: `0 ${offsetY}px ${elevation}px var(--elevationDemoShadowColor)`,
                        marginBottom: `${margin}px`,
                        borderRadius: `${radius}px`,
                    }}
                >
                    <div
                        className={spec ? `paddingUnit padTop` : `padTop`}
                        style={{
                            height: `${paddingY}${baseScaleUnit}`,
                            width: `${paddingY}${baseScaleUnit}`,
                        }}
                    ></div>
                    <div
                        className={spec ? `paddingUnit padBottom` : ` padBottom`}
                        style={{
                            height: `${paddingY}${baseScaleUnit}`,
                            width: `${paddingY}${baseScaleUnit}`,
                        }}
                    ></div>
                    <div
                        className={spec ? 'paddingUnit padLeft' : 'padLeft'}
                        style={{
                            height: `${paddingX}${baseScaleUnit}`,
                            width: `${paddingX}${baseScaleUnit}`,
                        }}
                    ></div>
                    <div
                        className={spec ? 'paddingUnit padRight' : 'padRight'}
                        style={{
                            height: `${paddingX}${baseScaleUnit}`,
                            width: `${paddingX}${baseScaleUnit}`,
                        }}
                    ></div>
                    <div
                        className={spec ? 'paddingUnit compRadius' : 'compRadius'}
                        style={{
                            height: `${radius * 2}${baseScaleUnit}`,
                            width: `${radius * 2}${baseScaleUnit}`,
                            borderRadius: `${radius}${baseScaleUnit}`,
                        }}
                    ></div>

                    <div className="containerContent">
                        <p className="apply-font-main">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            non nisl ac dui gravida pellentesque. Phasellus et cursus dui, at
                            fringilla risus. Vestibulum a tortor euismod, fermentum tortor
                            sed, euismod turpis.
                        </p>
                    </div>
                </div>
                {showSpecs}
            </div>
        </div>
    );
};
