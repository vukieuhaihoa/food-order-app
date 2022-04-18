import { StatusCodes } from 'http-status-codes';

export interface IResponseFormat {
  statusCode: StatusCodes;
  message: string;
  data: any;
}
