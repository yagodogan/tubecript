import {z} from 'zod';

export const UrlValidation = z.object({
    url: z.string().min(1)
});

export type UrlValidation = z.infer<typeof UrlValidation>;