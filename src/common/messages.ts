export enum ErrorMessage {
  STAMP_NOT_ENOUGH = 'Stamp not enough',
  QR_CODE_INVALID = 'QR Code is invalid',
}

export enum ErrorCode {
  STAMP_NOT_ENOUGH = 460,
  QR_CODE_INVALID = 461,
}

export enum BOOKING_TYPE {
  GROUP = 2,
  PERSONAL = 1,
}

export enum PERMISSION {
  ROOT = 0,
  ADMINSTRATOR = 1,
  STAFF = 2,
}

export enum APPLY_TYPE {
  BOTH = 0,
  PERSONAL = 1,
  GROUP = 2,
}

export enum BOOKING_STATUS {
  TEMP = 0,
  DONE = 1,
  CANCEL = 2,
  INQUIRY = 3,
  IN_DATE = 4,
}

export enum UPDATE_TYPE {
  TEMP = 0,
  EDIT = 1,
}
