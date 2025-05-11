const ImagePreview = ({ imageUrl }) => {
    if (!imageUrl) return null;
    return (
        <div className="center ma">
            <div className="absolute mt2">
              <img id="inputimage" alt="" src={imageUrl}/>
            </div>
        </div>
    );
}

export default ImagePreview;