import './App.css';
import { useState } from 'react';
import {searchImages} from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const App = () => {
    const [images,setImages] = useState([]);

    const handleSubmit = async (searchParam) => {
        const imagesList = await searchImages(searchParam);
        setImages(imagesList);
    }
    return (
        <div className='container'>
            <SearchBar className='search-bar' onSubmit={handleSubmit}/>
            <ImageList className='image-list' images={images} />
        </div>
    );
}

export default App;