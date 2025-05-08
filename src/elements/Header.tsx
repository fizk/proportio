import React, { MouseEvent, ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import { baseScaleUnitState } from '../states/base';
import scaleUnits from '../utilities/scaleUnits';
import Logo from './Logo';
import GitHubLogo from '../icons/github';
import capitalize from '../utilities/capitalize';
import Dropdown from 'react-dropdown';
import '../styles/header.css';

interface Props {
    children: ReactNode
    setShowModal: (value: boolean) => void
}

export default function Header(props: Props) {
    const setShowModal = props.setShowModal;
    const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState);

    const inputs = scaleUnits.map((unit) => {
        return (
            <div className="radioGroup" key={`${unit}`}>
                <input
                    type="radio"
                    id={`scale${unit}`}
                    name="scale_unit"
                    value={unit}
                    onClick={(event: MouseEvent<HTMLInputElement>) => (
                        setBaseScaleUnit(event.currentTarget.value)
                    )}
                    defaultChecked={unit === baseScaleUnit ? true : false}
                />
                <label htmlFor={`scale${unit}`}>{capitalize(unit)}</label>
            </div>
        );
    });

    return (
        <header>
            <div className="header--left">
                <div className="logoLockup">
                    <Logo color="var(--logoColor)" size={32} />
                    <h4 className="logo">Proportio</h4>
                </div>
                {props.children}
            </div>

            <div className="header--right">
                <div className="formGroup">
                    <label id="scale_unitLabel">Unit</label>
                    <span id="unitPicker">
                        <Dropdown
                            // ariaLabelledBy="scale_unitLabel"
                            options={scaleUnits}
                            onChange={(e) => {
                                setBaseScaleUnit(e.value);
                            }}
                            // value={icon}
                            placeholder={baseScaleUnit}
                        />
                    </span>
                </div>
                <button
                    className="clearButton"
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    {' '}
                    Export{' '}
                </button>
                <a
                    target="_blank"
                    href="https://github.com/NateBaldwinDesign/proportio"
                    title="Github repository"
                >
                    <GitHubLogo size={32} color="var(--textColor" />
                </a>
            </div>
        </header>
    );
};
