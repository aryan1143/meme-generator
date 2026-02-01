import React from 'react'
import Button from './Button';

const TextControlPopUp = ({ show, sharedVar, setSharedVar, selectedText, reference }) => {
    const fonts = [
        // Meme / Bold Display
        { name: "Anton", value: "Anton" },
        { name: "Bebas Neue", value: "Bebas Neue" },
        { name: "Oswald", value: "Oswald" },
        { name: "Montserrat", value: "Montserrat" },

        // Clean Modern
        { name: "Poppins", value: "Poppins" },
        { name: "Inter", value: "Inter" },
        { name: "DM Sans", value: "DM Sans" },

        // Fancy / Stylish Display
        { name: "Cinzel", value: "Cinzel" },
        { name: "Orbitron", value: "Orbitron" },
        { name: "Abril Fatface", value: "Abril Fatface" },

        // Handwritten / Fancy Casual
        { name: "Pacifico", value: "Pacifico" },
        { name: "Dancing Script", value: "Dancing Script" },
        { name: "Great Vibes", value: "Great Vibes" },

        // Decorative / Unique
        { name: "Bangers", value: "Bangers" },
        { name: "Luckiest Guy", value: "Luckiest Guy" }
    ];



    function loadGoogleFont(fontName) {
        const id = "font-" + fontName;

        if (document.getElementById(id)) return;

        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href =
            `https://fonts.googleapis.com/css2?family=${fontName.replace(" ", "+")}&display=swap`;

        document.head.appendChild(link);
    }



    const changeFont = (fontName) => {
        loadGoogleFont(fontName);
        setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, font: fontName } }));
    };



    function handleOutlineToggle() {
        setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, outline: !sharedVar.outline } }));
    }

    function handleBoldToggle() {
        setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, bold: !sharedVar.bold } }));
    }

    function handleItalicToggle() {
        setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, italic: !sharedVar.italic } }));
    }

    function handleUndrlineToggle() {
        setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, underline: !sharedVar.underline } }));
    }

    function handleOutlineColorChange(e) {
        setSharedVar(prev => ({ ...prev, [selectedText]: { ...sharedVar, outlineColor: e.target.value } }));
    }


    return (
        <div ref={reference} className={`${show ? 'absolute' : 'hidden'} p-3 top-12 left-0 bg-gray-600 w-50 h-fit pb-5 rounded-2xl`}>
            <div className="w-full flex flex-col justify-between gap-3">
                <div className='flex justify-between'>
                    <Button
                        btnText={"Outline:" + (sharedVar.outline ? " On" : " Off")}
                        isRoundedProp={true}
                        colorProp={sharedVar.outline ? 'bg-gray-500' : 'bg-gray-400'}
                        sizeProp={'small'}
                        isBoldProp={true}
                        onClick={handleOutlineToggle}
                    />
                    <input type="color" onChange={handleOutlineColorChange} />
                </div>
                <div className='flex justify-between'>
                    <Button
                        btnText={"Bold:" + (sharedVar.bold ? " On" : " Off")}
                        isRoundedProp={true}
                        colorProp={sharedVar.bold ? 'bg-gray-500' : 'bg-gray-400'}
                        sizeProp={'small'}
                        isBoldProp={true}
                        onClick={handleBoldToggle}
                    />
                    <Button
                        btnText={"Italic:" + (sharedVar.italic ? " On" : " Off")}
                        isRoundedProp={true}
                        colorProp={sharedVar.italic ? 'bg-gray-500' : 'bg-gray-400'}
                        sizeProp={'small'}
                        isBoldProp={true}
                        onClick={handleItalicToggle}
                    />
                </div>
                <div className='flex justify-between'>
                    <select className='bg-gray-400 p-1 rounded-sm font-bold' value={sharedVar.font} onChange={(e) => changeFont(e.target.value)}>
                        {fonts.map(f => (
                            <option key={f.value} value={f.value}>{f.name}</option>
                        ))}
                    </select>
                    <Button
                        btnText={sharedVar.underline ? "U̲" : "U"}
                        isRoundedProp={true}
                        colorProp={sharedVar.underline ? 'bg-gray-500' : 'bg-gray-400'}
                        sizeProp={'small'}
                        isBoldProp={true}
                        onClick={handleUndrlineToggle}
                    />
                </div>
            </div>
        </div>
    )
}

export default TextControlPopUp