import { error } from 'console';
import { ErrorCodes, HttpException } from './root';
export class  InternalException extends HttpException{
    constructor(message:string, errorCode:ErrorCodes, error:any){
        super(message, errorCode, 500, error);
    }
}