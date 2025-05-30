import React, { ReactNode } from 'react';
import scaleUnits, { ScaleUnitTypes } from '../utilities/scaleUnits';
import Logo from '../elements/Logo';
import GitHubLogo from '../icons/github';
import Dropdown from 'react-dropdown';
import { useBase } from '../context/BaseContext'
import '../styles/header.css';

interface Props {
    children: ReactNode
    setShowModal: (value: boolean) => void
}

export default function Header({children, setShowModal}: Props) {

    const {base: {baseScaleUnit}, setBaseScaleUnit} = useBase();

    return (
        <header>
            <div className="header--left">
                <div className="logoLockup">
                    <Logo color="var(--logoColor)" size={32} />
                    <h4 className="logo">Proportio</h4>
                </div>
                {children}
            </div>

            <div className="header--right">
                <div className="formGroup">
                    <label id="scale_unitLabel">Unit</label>
                    <span id="unitPicker">
                        <Dropdown
                            // ariaLabelledBy="scale_unitLabel"
                            options={scaleUnits}
                            onChange={(e) => {
                                setBaseScaleUnit(e.value as ScaleUnitTypes);
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
