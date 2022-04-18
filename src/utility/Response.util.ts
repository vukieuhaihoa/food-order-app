import { StatusCodes } from 'http-status-codes';
import { Response } from 'express';
import { IResponseFormat } from '@src/dto/Response.dto';

const ResponseFormat = (res: Response, resData: IResponseFormat) => {
  const { statusCode, message, data } = resData;
  res.status(statusCode).json({
    success: statusCode === StatusCodes.OK,
    message,
    data,
    error_code: statusCode,
  });
};
export { ResponseFormat };
