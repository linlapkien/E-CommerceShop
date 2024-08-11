import Container from '@/app/components/Container';
import ManageProductsClient from './ManageProductsClient';
import getProducts from '@/actions/getProducts';
import { getCurrentUser } from '@/actions/getCurrentUser';
import NullData from '@/app/components/products/NullData';

const ManageProducts = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();

  // Way to protected route, if currentUser != admin -> access denied
  if (!currentUser || currentUser.role != 'ADMIN') {
    return <NullData title="Oops! Access denied" />;
  }

  return (
    <div className="pt-8">
      <Container>
        <ManageProductsClient products={products} />
      </Container>
    </div>
  );
};

export default ManageProducts;
