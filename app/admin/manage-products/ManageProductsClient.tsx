'use client';

import { Product } from '@prisma/client';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { formatPrice } from '@/utils/formatPrice';
import Heading from '@/app/components/Heading';
import Status from '@/app/components/Status';
import {
  MdCached,
  MdClose,
  MdDelete,
  MdDone,
  MdRemoveRedEye,
} from 'react-icons/md';
import ActionBtn from '@/app/components/ActionBtn';
import { useCallback } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import firebaseApp from '@/libs/firebase';

//-------------------------------------------------

interface ManageProductsClientProps {
  products: Product;
}

const ManageProductsClient: React.FC<ManageProductsClientProps> = ({
  products,
}) => {
  const router = useRouter();
  const storage = getStorage(firebaseApp);
  let rows: any = [];

  if (products) {
    rows = Object.values(products).map((product: any) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        brand: product.brand,
        category: product.category,
        inStock: product.inStock,
        images: product.images,
      };
    });
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 220 },
    { field: 'name', headerName: 'Name', width: 220 },
    //-------------Price-----------------------
    {
      field: 'price',
      headerName: 'Price(USD)',
      width: 100,
      renderCell: (params) => {
        return (
          <div className="font-bold text-slate-800">{params.row.price}</div>
        );
      },
    },
    //------------------------------------
    { field: 'category', headerName: 'Category', width: 100 },
    { field: 'brand', headerName: 'Brand', width: 100 },
    //-------------inStock-----------------------
    {
      field: 'inStock',
      headerName: 'inStock',
      width: 120,
      renderCell: (params) => {
        return (
          <div className="mt-3">
            {params.row.inStock == true ? (
              <Status
                text="in stock"
                icon={MdDone}
                bg="bg-teal-200"
                color="text-teal-700"
              />
            ) : (
              <Status
                text="out of stock"
                icon={MdClose}
                bg="bg-rose-200"
                color="text-rose-700"
              />
            )}
          </div>
        );
      },
    },
    //-------------Action-----------------------
    {
      field: 'action',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4 w-full mt-2.5">
            {/* toggle inStock of product inStock<->outStock */}
            <ActionBtn
              icon={MdCached}
              onClick={() => {
                handleToggleStock(params.row.id, params.row.inStock);
              }}
            />
            <ActionBtn
              icon={MdDelete}
              onClick={() => {
                handleDelete(params.row.id, params.row.images);
              }}
            />
            <ActionBtn
              icon={MdRemoveRedEye}
              onClick={() => {
                router.push(`/product/${params.row.id}`);
              }}
            />
          </div>
        );
      },
    },
    //------------------------------------------
  ];

  //-------------------------------------------------
  // handle toggle inStock of product inStock<->outStock
  const handleToggleStock = useCallback((id: string, inStock: boolean) => {
    // create PUT API method in api/product/route
    axios
      .put('/api/product', {
        id,
        inStock: !inStock,
      })
      .then((res) => {
        toast.success('Product status changed');
        router.refresh();
      })
      .catch((err) => {
        toast.error('Oops! Something went wrong');
        console.log(err);
      });
  }, []);

  //-------------------------------------------------
  // handle Delete action button
  const handleDelete = useCallback(async (id: string, images: any[]) => {
    toast('Deleting product, please wait!');

    const handleImageDelete = async () => {
      try {
        for (const item of images) {
          if (item.image) {
            // item.image is URL of that image
            // get image from firebase storage
            const imageRef = ref(storage, item.image);

            // then wait to delete that image URL in firebase
            await deleteObject(imageRef);
            console.log('image deleted', item.image);
          }
        }
      } catch (error) {
        return console.log('Deleting images error', error);
      }
    };

    await handleImageDelete();

    // we have ${id} in api/product/${id}
    // becuz id is dynamic so we have to create folder [id] inside the api/product
    axios
      .delete(`/api/product/${id}`)
      .then((res) => {
        toast.success('Product deleted');
        router.refresh();
      })
      .catch((err) => {
        toast.error('Failed to delete product');
        console.log(err);
      });
  }, []);
  //-------------------------------------------------

  return (
    <div className="max-w-[1150px] m-auto text-xl">
      <div className="mb-6 mt-8">
        <Heading title="Manage Products" center />
      </div>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[9, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ManageProductsClient;
