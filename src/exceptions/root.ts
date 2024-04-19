// message, status code(공통적), error code(식별가능)
export class HttpException extends Error{
    message: string;        //에러 발생 원인
    errorCode: ErrorCodes;  //에러유형(Enum)
    statusCode: number;     //Http status
    errors: any;

    constructor(message:string, errorCode: ErrorCodes, statusCode:number, error:any) {
        super(message) 
        this.message = message
        this.errorCode = errorCode
        this.statusCode = statusCode
        this.errors = error           
    }
}

export enum ErrorCodes {
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXISTS = 1002,
    INCORRECT_PASSWORD = 1003,
    INCORRECT_FORMAT = 2001,
    INTERNAL_EXCEPTION=3001
}