import { User } from '@prisma/client';

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: Date;
  updatedAt: Date;
  emailVerified: string | null;
};
