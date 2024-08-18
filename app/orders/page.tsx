import Container from '@/app/components/Container';
import { getCurrentUser } from '@/actions/getCurrentUser';
import NullData from '@/app/components/products/NullData';
import getOrdersByUserId from '@/actions/getOrdersByUserId';
import OrderClient from './OrderClient';

//-------------------------------------------------

const Orders = async () => {
  const currentUser = await getCurrentUser();

  // Way to protected route, if currentUser != admin -> access denied
  if (!currentUser) {
    return <NullData title="Oops! Access denied" />;
  }

  const orders = await getOrdersByUserId(currentUser.id);

  if (!orders) {
    return <NullData title="No orders yet ..." />;
  }

  return (
    <div className="pt-8">
      <Container>
        <OrderClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
