import React, { useState, useEffect } from "react";

const ImagePreview = ({ imageUrl, hasSubmitted }) => {
  const [imgError, setImgError] = useState(false);

  // Reset error when imageUrl changes
  useEffect(() => {
    setImgError(false);
  }, [imageUrl]);

  // Don’t render anything until user has submitted something
  if (!hasSubmitted) return null;

  // Show error message if image failed to load
  if (imgError) {
    return (
      <div
        className="center ma"
        style={{
          maxWidth: "500px",
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "1rem",
          borderRadius: "10px",
          textAlign: "center",
          color: "#d9534f",
          fontWeight: "bold",
        }}
      >
        <p>
          ❌ Unable to load the image.
          <br />
          <br />
          Please make sure you provide a <strong>direct image URL</strong>.
          <br />
          <br />✅ In <strong>Chrome</strong>: Right-click the image →{" "}
          <em>Copy image address</em>
          <br />✅ In <strong>Edge</strong>: Right-click the image →{" "}
          <em>Copy image link</em>
        </p>
      </div>
    );
  }

  // Show image if no error
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          alt="Preview"
          src={imageUrl}
          onError={() => setImgError(true)}
          onLoad={() => setImgError(false)}
        />
      </div>
    </div>
  );
};

export default ImagePreview;
