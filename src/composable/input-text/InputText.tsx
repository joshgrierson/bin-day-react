import React from "react";

interface InputTextProps {
    id?: string;
    value?: string;
    label?: string;
    onInputChange: (value: string) => void;
}

// default props
const defaults: InputTextProps = {
    value: "",
    label: "Text Field",
    id: "input-text-id",
    onInputChange: () => ({})
};

// Input Text functional component
function InputText ({
    value,
    label,
    id,
    onInputChange
}: InputTextProps = defaults) {
    return (
        <div className="c-input-text">
            <label htmlFor={ id }>{ label }</label>
            <input
                type="text"
                id={ id }
                value={ value }
                className="c-input-text__input"
                onChange={(event) => onInputChange(event.target.value) }
            />
        </div>
    );
}

export default InputText;