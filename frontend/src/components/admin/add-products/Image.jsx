import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { Button, IconButton, Typography } from "@mui/material";
import { IoClose } from "react-icons/io5";
import axios from "axios";
export default function ImageUpload() {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file, index) => {
      return {
        file,
        index,
      };
    });
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  const filterImages = (id) => {
    const newImages = images.filter((item, index) => {
      return item?.index !== id;
    });

    setImages(newImages);
  };

  const uploadImage = async () => {
    if (!images.length) {
      console.error("No image selected!");
      return;
    }

    let myImages = images?.map(async (item, index) => {
      try {
        let data = new FormData();

        data.append("file", item?.file);
        data.append("upload_preset", "ls8frk5v");
        let response = await axios.post(
          "https://api.cloudinary.com/v1_1/dwtsjgcyf/image/upload",
          data
        );
        return response.data.secure_url;
      } catch (error) {
        console.log(error);
      }
    });

    let imagesData = await Promise.all(myImages);
    console.log(imagesData);
  };

  return (
    <div className="card p-4  shadow">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Typography variant="h6">Product Image</Typography>
        <Typography className="text-purple fw-semibold">
          Add media from URL
        </Typography>
      </div>
      <div
        style={{ border: "2px dashed lightgray" }}
        {...getRootProps()}
        className="rounded-3 mb-4 w-100 p-4 rounded-xl flex flex-col items-center justify-center w-full max-w-md mx-auto cursor-pointer"
      >
        <input {...getInputProps()} />
        <div className="text-center flex flex-col items-center">
          <div
            className="d-flex rounded-2 m-auto justify-content-center align-items-center"
            style={{ background: "#ECEDEE", height: "35px", width: "35px" }}
          >
            <Upload className="text-gray-400" />
          </div>
          <Typography variant="h5" className="text-gray-500 mt-3">
            Drag and Drop Your Images Here.
          </Typography>
          <p className="text-gray-400">or</p>
          <label className="cursor-pointer mt-2">
            <Button
              variant="outlined"
              className="mt-2 border-purple text-purple"
            >
              Browse Images
            </Button>
            <br />
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => onDrop(Array.from(e.target.files))}
              style={{ visibility: "hidden" }}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* only display if images are present */}

      {images?.length > 0 && (
        <>
          {images?.map((item, index) => {
            return (
              <div
                key={index}
                className="d-flex align-items-center justify-content-between border  my-1 rounded-2 p-1 rounded-2"
              >
                <div className=" d-flex align-items-center gap-2">
                  <div className="border p-1 rounded-2">
                    <img
                      src={URL?.createObjectURL(item?.file)}
                      width={40}
                      height={40}
                      alt="preview image"
                    />
                  </div>
                  <div className="">
                    <Typography>{item?.file?.name}</Typography>
                    <Typography className="text-secondary text-sm m-0">
                      {(item?.file?.size / 1024).toFixed(0)} kb
                    </Typography>
                  </div>
                </div>
                <IconButton onClick={() => filterImages(item?.index)}>
                  <IoClose />
                </IconButton>
              </div>
            );
          })}
          <Button onClick={uploadImage} className="bg-purple text-white">
            Upload files
          </Button>
        </>
      )}
    </div>
  );
}
