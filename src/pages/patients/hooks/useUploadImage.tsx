import React, { useState, useRef } from "react";

const useUploadImage = () => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string>("");

  const imageUploadRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (imageUploadRef.current !== null) {
      imageUploadRef.current?.click();
    }
  };

  return [
    uploading,
    setUploading,
    profileImage,
    setProfileImage,
    handleButtonClick,
    imageUploadRef,
  ];
};

export default useUploadImage;
