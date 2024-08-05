'use client';

import Heading from '@/app/components/Heading';
import CategoryInput from '@/app/components/inputs/CategoryInput';
import CustomCheckBox from '@/app/components/inputs/CustomCheckBox';
import Input from '@/app/components/inputs/Input';
import TextArea from '@/app/components/inputs/TextArea';
import { categories } from '@/utils/Categories';
import { colors } from '@/utils/Colors';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

// Image type, when Uploaded
export type ImageType = {
  color: string;
  colorCode: string;
  image: File | null;
};

export type UploadedImageType = {
  color: string;
  colorCode: string;
  image: string;
};

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      description: '',
      brand: '',
      category: '',
      inStock: false,
      images: [],
      price: '',
    },
  });

  const category = watch('category');
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  // Role permission: Admin
  return (
    <>
      <Heading title="Add a Product" center />
      {/* Input Name of product */}
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
      {/* Input Price of product */}
      <Input
        id="price"
        label="Price"
        disabled={isLoading}
        register={register}
        type="number"
        errors={errors}
      />
      {/* Input Brand of product */}
      <Input
        id="brand"
        label="Brand"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {/* TextArea Description of product */}
      <TextArea
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {/* small customeCheckBox of product */}
      <CustomCheckBox
        id="inStock"
        register={register}
        label="This Product is in stock"
      />
      {/* Select a Category form */}
      <div className="w-full font-medium">
        <div className="mb-2 font-semibold ">Select a Category</div>
        <div className="grid grid-cols-2 md:grid-cols-3 max-h-[50vh] gap-4 overflow-y-auto">
          {categories.map((item) => {
            if (item.label == 'All') {
              return null;
            }
            // show the category item
            return (
              <div key={item.label} className="col-span">
                <CategoryInput
                  onClick={(category) => setCustomValue('category', category)}
                  selected={category == item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col flex-wrap gap-4">
        <div>
          <div className="font-bold">
            Select the available product colors and upload their images.
          </div>
          <div>
            You must upload an image for each of the color selected otherwise
            your color selection will be ignored
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {colors.map((item, index) => {
            return <></>;
          })}
        </div>
      </div>
    </>
  );
};

export default AddProductForm;
