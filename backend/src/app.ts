import { Hono } from 'hono'
import { urlRoute } from './routes/index.js';
import { corsConfig } from './config/cors.js';

const app = new Hono()
    .use('*', corsConfig) 
    .route('/', urlRoute);

app.get('/', (c) => c.text('Bağlantı başarılı!'))

export default app;