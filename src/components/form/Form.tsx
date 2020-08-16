import React from "react";
import InputText from "../../composable/input-text/InputText";

interface FormProps {
    onSubmitForm: (
        event: Event,
        data: unknown
    ) => void;
}

class Form extends React.Component<FormProps> {
    public constructor(props: FormProps) {
        super(props);
    }

    private onInputTextChange(value: string): void {
        console.info("Input text field value %s", value);
    }

    public render () {
        return (
            <div className="c-form">
                <InputText onInputChange={(value) => this.onInputTextChange(value)} />
            </div>
        );
    }
}

export default Form;