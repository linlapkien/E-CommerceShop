import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/libs/prismadb';
import bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        // check we dont have user email or user PW, then throw err
        if (!credentials?.email || !credentials.password)
          throw new Error('Invalid email or password');

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // check we dont have user or user that have a hashedPW, then throw err
        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid email or password');
        }

        // compare user pw and hashed pw, if correct, return T else return F.
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        // Wrong PW, throw err
        if (!isCorrectPassword) {
          throw new Error('Invalid email or password');
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  debug: process.env.NODE_ENV == 'development',
  session: {
    strategy: 'jwt',
  },
  // jwt secret key
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
