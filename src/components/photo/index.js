import "./style.css";
import Card from "react-bootstrap/Card";

const ImageInfo = (props) => {

  console.log(props?.img)
    const { alt_description, description, id, likes, links, urls, user, relatedTags } = props.img;

    // const { bio, instagram_username, profile_image, portfolio_url, twitter_username, first_name  } = user;

    // const { small: pfp } = profile_image;

    // const { regular: url } = urls;
  return (
    <div className="image-info-wrapper">
      <Card>
        <Card.Img variant="top" src={urls?.regular} />
        <Card.Body>
          <Card.Title>{alt_description}</Card.Title>
          <Card.Text>
            <div className="description"><span>About: </span>{description}</div>
            <div className="user"><span>Creator: </span>{user?.first_name}</div>
            <div className="likes"><div className="like-icon"></div><span>{likes}</span></div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ImageInfo;
