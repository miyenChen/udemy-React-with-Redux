import ImageShow from './ImageShow';
import './ImageList.css';

function ImageList({ images }) {
    const renderedImages = images.map((img) => {
        return <ImageShow key={img.id} img={img} />;
    });
    return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
