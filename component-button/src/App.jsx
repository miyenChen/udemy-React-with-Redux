import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './components/Button';

function App() {
    const handleEvent = () => {
        console.log('click');
    };
    return (
        <div>
            <div>
                <Button onClick={handleEvent} secondary outline rounded className="mb-3">
                    <GoBell />
                    Click me!!
                </Button>
            </div>
            <div>
                <Button danger outline onMouseEnter={handleEvent}>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning onMouseLeave={handleEvent}>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Something!
                </Button>
            </div>
        </div>
    );
}

export default App;
