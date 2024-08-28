import Container from '@/app/components/Container';
import ProductDetails from './ProductDetails';
import ListRating from './ListRating';
import { products } from '@/utils/products';
import getProductById from '@/actions/getProductById';
import NullData from '@/app/components/products/NullData';

interface IPrams {
  productId?: string;
}

const Product = async ({ params }: { params: IPrams }) => {
  console.log('params', params);

  const product = await getProductById(params);

  if (!product)
    return <NullData title="Oops! Product with the given id does not exist" />;

  return (
    <div className="p-8">
      <Container>
        {/* Product Detail: Image, content in the Right side */}
        <ProductDetails product={product} />

        {/* Add Rating and list review*/}
        <div className="flex flex-col gap4 mt-20">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
