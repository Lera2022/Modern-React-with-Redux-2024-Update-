function ImageShow({ image }) {
    return <div>
        {/* ImageShow */}
        {/* {image.id} */}
        {/* {image.alt_description} */}
        <img src={image.urls.small} alt={image.alt_description} />
        </div>;
}

export default ImageShow;