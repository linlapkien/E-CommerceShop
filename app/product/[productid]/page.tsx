import { product } from '@/utils/product';
import Container from '@/app/components/Container';
import ProductDetails from './ProductDetails';

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log('params', params);
  return (
    <div>
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
