import express, {ErrorRequestHandler, Express, Request, Response, Router} from 'express'
import * as dotenv from 'dotenv'
import rootRouter from './routes';
import { PrismaClient } from '@prisma/client';
import { RequestHandler } from 'express';
process.env.NODE_ENV == 'prod'? dotenv.config({path:'./.env.prod'}) : dotenv.config({path:'./.env.local'});

const app:Express = express();

app.use('/',rootRouter);

app.use((error:Error, req:Request, res:Response)  =>{

})
 export const prisma = new PrismaClient({
    log:['query']
});

app.listen(process.env.PORT, () => {
    console.log(`App이 ${process.env.PORT}에서 작동 중 입니다.`);
});