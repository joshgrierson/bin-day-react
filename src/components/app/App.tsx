import React from 'react';
import Form from "../form/Form";
import './App.scss';

class App extends React.Component {
    private onFormSubmitted(): void {}

    public render() {
        return (
            <div className="c-app">
                <div className="c-app__login">
                    <Form onSubmitForm={() => this.onFormSubmitted()} />
                </div>
            </div>
        );
    }
}

export default App;
