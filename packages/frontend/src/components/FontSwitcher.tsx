import React, {useState} from 'react';

const FontSwitcher: React.FC = () => {
    const [font, setFonts] = useState('sans-serif')

    const changeFont = (font: string) => {
        document.documentElement.style.fontFamily = font;
        setFonts(font);
    }

    return (
        <div>
            <button onClick={() => changeFont('sans-serif')}>Sans-serif</button>
            <button onClick={() => changeFont('serif')}>Serif</button>
            <button onClick={() => changeFont('monospace')}>Monospace</button>
        </div>
    )
};

export default FontSwitcher;