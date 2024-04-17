import express, {Express, Request, Response, Router} from 'express'
import * as dotenv from 'dotenv'
import rootRouter from './routes';
process.env.NODE_ENV == 'prod'? dotenv.config({path:'./.env.prod'}) : dotenv.config({path:'./.env.local'});

const app:Express = express();

app.use('/',rootRouter);

app.get('/',(req:Request,res:Response) =>{
    res.send('Working');
})

app.listen(process.env.PORT, () => {
    console.log(`App이 ${process.env.PORT}에서 작동 중 입니다.`);
});