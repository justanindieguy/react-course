import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList({ images }) {
  const renderedImages = images.map((image) => (
    <ImageShow key={image.id} image={image} />
  ));

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
