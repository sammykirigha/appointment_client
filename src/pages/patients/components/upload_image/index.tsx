import React, { useState, useRef } from "react";
import { Button } from "../../../../common";
import fileUploader from "../../../../utils/file-uploader";

type Props = {
  setFieldValue: (image: string, url: string) => void;
};

const ImageUpload = (props: Props) => {
  const { setFieldValue } = props;
  const [uploading, setUploading] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string>("");

  const imageUploadRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (imageUploadRef.current !== null) {
      imageUploadRef.current?.click();
    }
  };

  return (
    <div className="flex flex-col  sm:flex-col md:flex-row items-center justify-between sm:ml-5 md:ml-9 mr-3 mt-7 ">
      <div className="flex flex-col justify-center sm:flex-col md:flex-row lg:flex-row items-center ">
        <img
          src={
            profileImage === ""
              ? "https://nellions.co.ug/wp-content/uploads/2018/06/male-placeholder-image.jpeg"
              : profileImage
          }
          // value={values.image}
          // name="image"
          alt="doc"
          className=" h-[4.5rem] w-[4.5rem] sm:h-[4.5rem] sm:w-[4.5rem] md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full ml-2"
        />
        <div className="flex flex-col ml-5">
          <h2 className="text-lg text-slate-900 font-semibold mb-2">
            Upload Your Picture
          </h2>
          <p className="text-md text-gray-500 w-auto md:w-80">
            Use an image at least 600px by 600px in either .jpg or .png format
          </p>
        </div>
      </div>
      <div className=" mb-3 flex mt-5 sm:flex-row sm:mt-4 md:flex-col lg:flex-col gap-3 items-center">
        <Button
          onClick={handleButtonClick}
          type="button"
          text="Upload"
          loading={uploading}
        />

        <input
          ref={imageUploadRef}
          onChange={async (e) => {
            if (e.target.files?.length === 0) return;
            let file;
            if (e.target.files !== null) {
              file = e.target.files[0];
            }
            try {
              setUploading(true);
              const url = await fileUploader(file);
              setUploading(false);
              setProfileImage(url);
              setFieldValue("image", url);
            } catch (error) {
              setUploading(false);
            }
          }}
          className="hidden"
          type="file"
          id=""
        />
      </div>
    </div>
  );
};

export default ImageUpload;
