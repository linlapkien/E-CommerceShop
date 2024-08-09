'use client';

import { ImageType } from '@/app/admin/add-products/AddProductForm';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface SelectedImageProps {
  item?: ImageType;
  handleFileChange: (value: File) => void;
}

// https://react-dropzone.js.org/
// npm install --save react-dropzone
// To use drop File upload to image
const SelectImage: React.FC<SelectedImageProps> = ({
  item,
  handleFileChange,
}) => {
  const onDrop = useCallback((acceptedFile: File[]) => {
    // Do sth with the files

    if (acceptedFile.length > 0) {
      handleFileChange(acceptedFile[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.png'] },
  });

  return (
    // Drag and drop the image file
    <div
      {...getRootProps()}
      className="border-2 border-slate-400 p-2 border-dashed cursor-pointer text-sm font-normal flex text-slate-400 items-center justify-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here ...</p>
      ) : (
        <p>+ {item?.color} Image</p>
      )}
    </div>
  );
};

export default SelectImage;
