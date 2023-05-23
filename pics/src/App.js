import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

function App() {
    const [images, setimages] = useState([]);
    const handleSubmit = async (term) => {
        // 直接發送搜索請求得到 promise，但我們需要等待結果在進行下一步，因此用await
        const result = await searchImages(term);

        setimages(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;
