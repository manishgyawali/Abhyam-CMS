import React, { useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { FaCloudUploadAlt } from "react-icons/fa"; // Import React Icon

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 4,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FileUpload = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Store the uploaded image URL
    }
  };

  return (
    <div style={{ width: "100%", textAlign: "center", }}>
      <label style={{ display: "block", cursor: "pointer", }}>
        {/* Show Upload Button with Icon when no image is uploaded */}
        {!image ? (
          <Button component="span" variant="contained" fullWidth>
            <FaCloudUploadAlt size={24} />
          </Button>
        ) : (
          // Show Uploaded Image (Clicking it allows re-upload)
          <img
            src={image}
            alt="Uploaded"
            width="100%"
            height="200px"
            style={{ objectFit: "cover", borderRadius: "5px" }}
          />
        )}
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </label>
    </div>
  );
};

export default FileUpload;
