import React, {useState} from 'react';
import {Select} from "@frontend/styles/FontSwitcher";

interface FontSwitcherProps {
    toggleFont: (font: string) => void;
    currentFont: string;
}

const FontSwitcher: React.FC<FontSwitcherProps> = ({ toggleFont, currentFont }) => {

    return (
        <div>
            <Select
                id="font-selector"
                value={currentFont}
                onChange={(e) => toggleFont(e.target.value)}
            >
                <option value="sans-serif">Sans-serif</option>
                <option value="serif">Serif</option>
                <option value="monospace">Monospace</option>
            </Select>
        </div>
    )
};

export default FontSwitcher;