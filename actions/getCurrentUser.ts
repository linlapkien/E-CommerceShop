import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import prisma from '@/libs/prismadb';

export async function getSession() {
  return await getServerSession(authOptions);
}

// this function enable us to get the user from anywhere in our application
export async function getCurrentUser() {
  try {
    const session = await getSession();

    // if we dont have session (no current user login) return null
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    // "npx prisma db push" after this function
    return {
      // https://github.com/prisma/prisma/discussions/14371,
      // currentUser error: Type 'string' is not assignable to type 'Date'." #14371
      ...currentUser,
      createdAt: new Date(currentUser.createdAt),
      updatedAt: new Date(currentUser.updatedAt),
      emailVerified: currentUser.emailVerified?.toString() || null,
    };
  } catch (error: any) {
    return null;
  }
}
