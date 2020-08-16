import React from 'react';
import './App.scss';

interface AppProps {}

class App extends React.Component {
    private constructor(props: AppProps) {
        super(props);
    }

    public render() {
        return (
            <div className="c-app"></div>
        );
    }
}

export default App;
