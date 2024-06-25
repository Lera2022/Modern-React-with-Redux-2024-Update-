import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
    // return <div>App</div>;
    // const handleClick = () => {
    //     console.log('Click!!');
    // };

    return <div>
        <div>
            {/* <Button text="Click here!"></Button> */}
            {/* <Button purpose="primary" rounded outline>Click me!!</Button> */}
            {/* <Button success primary rounded outline>Click me!!</Button> */}
            {/* <Button success rounded outline onClick={handleClick}> */}
            <Button success rounded outline className="mb-5" >
                {/* <GoBell className="mr-1" /> */}
                <GoBell />
                Click me!!
            </Button>
        </div>
        <div>
            {/* <Button danger outline onMouseEnter={handleClick}> */}
            <Button danger outline>
                {/* <GoCloudDownload className="mr-1" /> */}
                <GoCloudDownload />
                Buy now!
            </Button>
        </div>
        <div>
            {/* <Button warning onMouseLeave={handleClick}> */}
            <Button warning >
                {/* <GoDatabase className="mr-1" /> */}
                <GoDatabase />
                See Deal!
            </Button>
        </div>
        <div>
            <Button secondary outline>Hide Ads!</Button>
        </div>
        <div>
            <Button primary rounded>Something!</Button>
        </div>
    </div>;
}

export default App;