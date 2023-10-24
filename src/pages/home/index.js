import Header from "../../components/header";
import Search from "./search";
import Photos from "./photos";
import { useEffect, useState } from "react";
import { getRandomImages } from "../../services/unsplash";
import Photo from "../photo";

const Home = () => {

    const [ images, setImages ] = useState([]);
    const showHeader = true;
    const [ showSearch, setShowSearch ] = useState(true);
    const [ showPhotos, setShowPhotos ] = useState(true);
    const [ showPhoto, setShowPhoto ] = useState(false);

    const [ searchResult, setSearchResult ] = useState([]);
    const [ searchValue, setSearchValue ] = useState('');

    useEffect(() => 
    async () => {
        const data = await getRandomImages();

        setImages(data);
    }, []);

    useEffect(() => {
        if (searchResult.length) {
            setShowPhoto(true);
            setShowSearch(false);
            setShowPhotos(false);
        }
    }, [searchResult.length, searchValue])

    return (
        <>
        { showHeader && <Header setSearchValue={setSearchValue} setSearchResult={setSearchResult} />}
        { showSearch && <Search setSearchValue={setSearchValue} setSearchResult={setSearchResult} />}
        { showPhotos && <Photos images={images} />}
        { showPhoto && <Photo images={searchResult} />}
        </>
    )
}

export default Home;