import * as dotenv from 'dotenv'
process.env.NODE_ENV == 'prod'? dotenv.config({path:'./.env.prod'}) : dotenv.config({path:'./.env.local'});
export const JWT_SECRET = process.env.JWT_SECRET!