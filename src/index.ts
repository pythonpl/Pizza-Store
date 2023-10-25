import express from 'express';
import { appRouter } from './router/appRouter';
import { errorHandler } from './services/middleware/errorHandler';
import { cyclicStatusUpdate } from './utils/cyclicUpdate';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(appRouter);
app.use(errorHandler);

setInterval(async () => {
    await cyclicStatusUpdate();
}, 60 * 1000);

app.listen(3000, ()=> {
    console.log('Listening');
});