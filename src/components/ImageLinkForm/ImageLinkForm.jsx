import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onButtonSubmit();
  };

  return (
    <div>
      <p className="center f3">
        {"Show me any image that you can find on the web and I'll tell you what it is."}
      </p>
      <div className="center">
        <form
          className="image-form center pa4 br3 shadow-5"
          onSubmit={handleSubmit}
          role="search"
        >
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
            placeholder="Paste image URL here..."
            aria-label="Image URL input"
          />
          <button
            type="submit"
            className="w-30 grow f4 link ph3 pv2 dib white bg-dark-pink"
          >
            Detect
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageLinkForm;
