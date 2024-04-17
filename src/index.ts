import express, {Express, Request, Response} from 'express'
import * as dotenv from 'dotenv'
process.env.NODE_ENV == 'prod'? dotenv.config({path:'./.env.prod'}) : dotenv.config({path:'./.env.local'});

const app:Express = express();

app.get('/',(req:Request,res:Response) =>{
    res.send('Working');
})

app.listen(7300, () => {
    console.log('App이 7300Port에서 작동 중 입니다.');
});