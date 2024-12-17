import React, {useState} from 'react';

interface FontSwitcherProps {
    toggleFont: (font: string) => void;
    currentFont: string;
}

const FontSwitcher: React.FC<FontSwitcherProps> = ({ toggleFont, currentFont }) => {

    return (
        <div>
            <select
                id="font-selector"
                value={currentFont}
                onChange={(e) => toggleFont(e.target.value)}
                style={{
                    padding: '0.5rem',
                    fontSize: '1rem',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                }}
            >
                <option value="sans-serif">Sans-serif</option>
                <option value="serif">Serif</option>
                <option value="monospace">Monospace</option>
            </select>
        </div>
    )
};

export default FontSwitcher;