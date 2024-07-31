import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // get the body from req
  const body = await request.json();
  // properties from body
  const { name, email, password } = body;
  console.log({ name, email, password });
  //hashedPW
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a user
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  // Return the user using NextResponse
  return NextResponse.json(user);
}
