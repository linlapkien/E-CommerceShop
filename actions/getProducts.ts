import prisma from '@/libs/prismadb';

export interface IProductParams {
  category?: string | null;
  searchTerm?: string | null;
}

// getProducts is filter by category
export default async function getProducts(params: IProductParams) {
  try {
    const { category, searchTerm } = params;
    let searchString = searchTerm;

    console.log('1:', searchString);

    if (!searchTerm) {
      searchString = '';
    }

    let query: any = {};

    if (category) {
      query.category = category;
    }

    const products = await prisma.product.findMany({
      where: {
        ...query,
        OR: [
          {
            name: {
              contains: searchString,
              mode: 'insensitive',
            },
            description: {
              contains: searchString,
              mode: 'insensitive',
            },
          },
        ],
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

    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}
