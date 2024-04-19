import { NextFunction, Request, Response } from "express";
import { ErrorCodes, HttpException } from "../exceptions/root";
import { InternalException } from "../exceptions/internal-exception";

export const customErrorHandler = (madeMethod: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      //madeMethod는 컨트롤러를 전달 받을것
      madeMethod(req, res, next);
    } catch (error: any) {
      let exception: HttpException;
      if (error instanceof HttpException) {
        //HttpException 인스턴스라는 것은
        //그 종류가 처리된 오류라는 의미이다.
        exception = error;
      } else {
        //HttpException 인스턴스가 아니라는것은
        //해당 오류가 처리되지 않은 오류이거나 런타임 오류임을 의미한다.
        exception = new InternalException(
          "예상하지 못한 문제가 발생했습니다.",
          ErrorCodes.INTERNAL_EXCEPTION,
          error
        );
      }
      next(exception);
    }
  };
};
