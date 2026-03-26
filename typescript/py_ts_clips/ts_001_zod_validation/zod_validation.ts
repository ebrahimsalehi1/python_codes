import { z } from 'zod';

const UserSchema = z.object({
  username: z.string().min(3),
  age: z.number().positive(),
  email: z.email(),
});

try {
  const result = UserSchema.parse({
    username: 'Eb',
    age: 5,
    email: 'ebrahim@yahoo.com',
  });
} catch (ex) {
  console.log(ex);
}
