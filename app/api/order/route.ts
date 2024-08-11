import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/actions/getCurrentUser';

// API: PUT modify inStock of the product
export async function PUT(request: Request) {
  const currentUser = await getCurrentUser();

  // If currentUser is not Admin role, return err
  if (!currentUser || currentUser.role != 'ADMIN') {
    return NextResponse.error();
  }

  const body = await request.json();
  const { id, deliveryStatus } = body;

  const order = await prisma.order.update({
    where: { id: id },
    data: { deliveryStatus },
  });

  return NextResponse.json(order);
}
