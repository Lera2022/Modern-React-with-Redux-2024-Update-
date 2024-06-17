import { useState } from'react';
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        // console.log('Do a search for: ', term);
        const result = await searchImages(term);

        // console.log(result);
        setImages(result);
    };

    return <div>
            {/* App */}
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>;
        
}

export default App;