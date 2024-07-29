import Container from '@/app/components/Container';
import ProductDetails from './ProductDetails';
import ListRating from './ListRating';
import { products } from '@/utils/products';

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log('params', params);

  const product = products.find((item) => item.id === params.productId);

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
