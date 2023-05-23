function ImageShow({ img }) {
    return <img src={img.urls.regular} alt={img.alt_description} />;
}

export default ImageShow;
