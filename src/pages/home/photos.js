
import ImageCard from '../../components/card';
import './photos.css';

const Photos = ( props ) => {
    const images = props?.images || [];

    return (
        <div className='photo-wrapper'>
            {
            images?.map((img) => (
                <ImageCard img={img} />
            ))
            }
        </div>
    );
}

export default Photos;