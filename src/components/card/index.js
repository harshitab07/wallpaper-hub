import Card from 'react-bootstrap/Card';
import like from '../../assets/like.svg'
import './style.css';

const ImageCard = (props) => {
  console.log(props)
    const { urls, user, likes } = props?.img;

  return (
    <div className='card-wrapper'>
      <Card>
        <Card.Img variant="top" src={urls?.regular || urls?.raw} />
        <Card.Body>
          <Card.Text>
           <div className='left'>
            <img src={user?.profile_image?.small || user?.profile_image?.medium} alt='pfp' />
            <span>{user?.instagram_username || user?.name}</span>
           </div>
           <div className='right'>
            <img src={like} alt='like' className='like-icon' />
            <span>{likes}</span>
           </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImageCard;