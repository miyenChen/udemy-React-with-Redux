import React from 'react';
import Button from './components/Button';

function App() {
    return (
        <div className="app">
            <div>
                <Button primary outline>
                    chilk
                </Button>
            </div>
            <div>
                <Button warning>hell</Button>
            </div>
            <div>
                <Button secondary outline rounded>
                    bou
                </Button>
            </div>
        </div>
    );
}

export default App;
