import {z} from 'zod';
import { signup } from '../controllers/auth';

export const signupSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    address: z.string(),
    phone: z.string()
})