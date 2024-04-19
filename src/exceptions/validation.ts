import { error } from "console";
import { HttpException, ErrorCodes } from "./root";

export class UnprocessableEntity extends HttpException {
  constructor(message: string, errorCodes: ErrorCodes, error: any) {
    super(message, errorCodes, 422, error);
  }
}
