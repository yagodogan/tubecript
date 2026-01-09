import {cors} from 'hono/cors';

export const corsConfig = cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
})