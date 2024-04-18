import express, {ErrorRequestHandler, Express, json, Request, Response, Router} from 'express'
import * as dotenv from 'dotenv'
import rootRouter from './routes';
import { PrismaClient } from '@prisma/client';
import { errorMiddleware } from './middlewares/errors';
process.env.NODE_ENV == 'prod'? dotenv.config({path:'./.env.prod'}) : dotenv.config({path:'./.env.local'});

const app:Express = express();

app.use(json());


app.use('/',rootRouter);

 export const prisma = new PrismaClient({
    log:['query']
});

//에러 처리 헨들러 
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`App이 ${process.env.PORT}에서 작동 중 입니다.`);
});