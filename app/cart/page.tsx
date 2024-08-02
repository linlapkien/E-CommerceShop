import Container from '@/app/components/Container';
import CartClient from './CartClient';
import { getCurrentUser } from '@/actions/getCurrentUser';
const Cart = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="pt-8">
      <Container>
        <CartClient currentUser={currentUser} />
      </Container>
    </div>
  );
};

export default Cart;
