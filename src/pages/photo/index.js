import ImageCard from '../../components/card';
import './style.css';

const Photo = ( props ) => {
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

export default Photo;