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

    if()
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return <div></div>;
};

export default SelectImage;
