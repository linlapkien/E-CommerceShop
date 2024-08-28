import prisma from '@/libs/prismadb';

interface IParams {
  productId?: string;
}

export default async function getProductById(params: IParams) {
  try {
    const { productId } = params;

    // fetch product by Id, that include reviews with the users
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        reviews: {
          include: {
            user: true,
          },
          orderBy: {
            createdDate: 'desc',
          },
        },
      },
    });

    // if dont have that productId, return null
    if (!product) {
      return null;
    }

    return product;
  } catch (error: any) {
    throw new Error(error);
  }
}
