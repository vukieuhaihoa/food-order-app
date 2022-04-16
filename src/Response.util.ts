import { StatusCodes } from 'http-status-codes';

const ResponseFormat = (
  statusCode: StatusCodes,
  message: string,
  data: any
) => {
  return {
    success: statusCode === StatusCodes.OK,
    message,
    data,
    error_code: statusCode,
  };
};
export { ResponseFormat };
