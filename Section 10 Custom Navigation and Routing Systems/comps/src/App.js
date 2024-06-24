import Button from "./Button";

function App() {
    // return <div>App</div>;
    return <div>
        <div>
            {/* <Button text="Click here!"></Button> */}
            {/* <Button purpose="primary" rounded outline>Click me!!</Button> */}
            <Button success primary rounded outline>Click me!!</Button>
        </div>
        <div>
            <Button danger outline>Buy now!</Button>
        </div>
        <div>
            <Button warning>See Deal!</Button>
        </div>
        <div>
            <Button secondary outline>Hide Ads!</Button>
        </div>
        <div>
            <Button secondary rounded>Something!</Button>
        </div>
    </div>;
}

export default App;