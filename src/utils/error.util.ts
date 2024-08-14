import { InternalServerErrorException, NotFoundException } from '@nestjs/common'

export const createExceptionFromError = (
  error: Error,
  errorText: string = 'Server error',
  isShowDefaultError?: boolean,
) => {
  if (error instanceof NotFoundException) {
    return error
  } else {
    return new InternalServerErrorException(
      isShowDefaultError ? error : errorText,
    )
  }
}
