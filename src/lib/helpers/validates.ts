import * as z from 'zod';

export function isEmail(email: string) {
  const inputData = z.object({
    email: z.email(),
  });

  const data = inputData.safeParse({ email });

  return data.success;
}
