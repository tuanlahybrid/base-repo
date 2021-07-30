import { COMMON } from './common';
import { INVALID } from './invalid';
import { LINY } from './liny';
import { NOT_FOUND } from './not-found';

export const ERROR_CODE = {
  ...COMMON,
  ...INVALID,
  ...NOT_FOUND,
  ...LINY,
};
