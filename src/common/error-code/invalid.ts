export const INVALID = {
  GROUP_PERMISSION_ROOT: {
    code: 'GROUP_PERMISSION_ROOT',
    message: 'Group permission setting is invalid',
  },
  SCREEN_ACCESS: {
    code: 'SCREEN_ACCESS',
    message: 'Your role do not have permission to access this screen',
  },
  METHOD_ACCESS: (action: string) => ({
    code: 'ACTION_ACCESS',
    message: `Your role do not have permission to do ${action} method`,
  }),
  STAMP_FAIL: {
    code: 'STAMP_FAIL',
    message: 'Stamp fail',
  },
  STAMP_NOT_ENOUGH: {
    code: 'STAMP_NOT_ENOUGH',
    message: 'Stamp not enough',
  },
  QR_CODE_INVALID: {
    code: 'QR_CODE_INVALID',
    message: 'QR Code is invalid',
  },
  STAMP_ADD_MORE_ERROR: {
    code: 'STAMP_ADD_MORE_ERROR',
    message: 'Stamp added, please wait next day',
  },
  DATE_RANGE_MULTIPLE_DATE_REQUIRED: {
    code: 'DATE_RANGE_MULTIPLE_DATE_REQUIRED',
    message: 'Date range or multiple date are required',
  },
  MULTIPLE_DATE_NOT_EMPTY: {
    code: 'MULTIPLE_DATE_NOT_EMPTY',
    message: 'Multiple date not empty',
  },
  DAY_OF_WEEK_NOT_EMPTY: {
    code: 'DAY_OF_WEEK_NOT_EMPTY',
    message: 'Day of week not empty',
  },
  DATE_RANGE_INVALID: {
    code: 'DATE_RANGE_INVALID',
    message: 'Date range invalid',
  },
  PUBLIC_TIME_INVALID: {
    code: 'PUBLIC_TIME_INVALID',
    message: 'Public time is after the last apply date',
  },
  STAMP_UPDATE_FAIL: {
    code: 'STAMP_UPDATE_FAIL',
    message: 'Stamp update fail',
  },
  MULTIPLE_DATE_INVALID: {
    code: 'MULTIPLE_DATE_INVALID',
    message: 'Multiple date invalid',
  },
  APPLY_DATE_INVALID: {
    code: 'APPLY_DATE_INVALID',
    message: 'Apply date invalid',
  },
  SECTION_INVALID: {
    code: 'SECTION_INVALID',
    message: 'Section invalid',
  },
  PAYMENT_FAILD: {
    code: 'PAYMENT_FAILD',
    message: 'Total payment less than zero',
  },
  BOOKING_NUMBER_INVALID: {
    code: 'BOOKING_NUMBER_INVALID',
    message: 'Booking number invalid',
  },
  TICKET_SOLD_OUT: {
    code: 'TICKET_SOLD_OUT',
    message: 'Tickets have been sold out. Please add more to upperlimit or reload booking page',
  },
  BOOKING_ALREADY_DONE: {
    code: 'BOOKING_ALREADY_DONE',
    message: 'This booking already finish',
  },
  BOOKING_DATE_INVALID: {
    code: 'BOOKING_DATE_INVALID',
    message: 'Booking date invalid',
  },
  BOOKING_CANCEL_INVALID_TIME: {
    code: 'BOOKING_CANCEL_INVALID_TIME',
    message: 'Invalid time to cancel this Booking',
  },
  BOOKING_STATUS_CANCEL_INVALID: {
    code: 'BOOKING_STATUS_CANCEL_INVALID',
    message: 'Booking status cancel is invalid',
  },
  BOOKING_STATUS_INQUIRY_INVALID: {
    code: 'BOOKING_STATUS_INQUIRY_INVALID',
    message: 'Booking status inquiry is invalid',
  },
  BOOKING_PERSONAL_INVALID: {
    code: 'BOOKING_PERSONAL_INVALID',
    message: 'Booking type personal is invalid',
  },
  BOOKING_GROUP_UPDATE_INVALID: {
    code: 'BOOKING_GROUP_UPDATE_INVALID',
    message: 'Total new booking must be less than or request total old booking',
  },
  BOOKING_DATE_ISPAST: {
    code: 'BOOKING_DATE_ISPAST',
    message: 'Booking date is past',
  },
  TICKET_NUMBER_ISPAST: (tickerNumber: number) => ({
    code: 'TICKET_NUMBER_ISPAST',
    message: `Ticket number: ${tickerNumber} is in the past`,
  }),
  BOOKING_AREA_INVALID: {
    code: 'BOOKING_AREA_INVALID',
    message: 'Booking area is invalid',
  },
  BOOKING_FORM_AVAILABLE: {
    code: 'BOOKING_FORM_AVAILABLE',
    message: 'There are availble Booking Form',
  },
  AREA_TIME_RANGE_INVALID: {
    code: 'AREA_TIME_RANGE_INVALID',
    message: 'Area time ranger invalid',
  },
  STRIPE_TOTAL_INVALID: {
    code: 'STRIPE_TOTAL_INVALID',
    message: 'Strip total must greater than zero',
  },
  STRIPE_TOTAL_REFUND_INVALID: {
    code: 'STRIPE_TOTAL_REFUND_INVALID',
    message: 'Strip total refund invalid',
  },
  STRIPE_AMOUNT_COMPARE_INVALID: {
    code: 'STRIPE_AMOUNT_COMPARE_INVALID',
    message: 'Stripe charge amount with payment amount mismatch!',
  },
  AUTHORITIES_NOT_EMPTY: {
    code: 'AUTHORITIES_NOT_EMPTY',
    message: 'Authorities not empty',
  },
  AGENT_EXISTED: {
    code: 'AGENT_EXISTED',
    message: 'Agent existed',
  },
  DAILY_AREA_TIME_EXISTED: {
    code: 'DAILY_AREA_TIME_EXISTED',
    message: 'Timezone existed',
  },
  DAILY_AREA_TIME_HAS_BOOKING: {
    code: 'DAILY_AREA_TIME_HAS_BOOKING',
    message: 'There is booking for this date',
  },
  UPDATE_DAILY_AREA_TIME_HAS_BOOKING: {
    code: 'UPDATE_DAILY_AREA_TIME_HAS_BOOKING',
    message: 'There is booking for this date, only change upperlimit or public time',
  },
  AGENT_HAD_CHILDREN: {
    code: 'AGENT_HAD_CHILDREN',
    message: 'Agent had children, can not delete',
  },
  AGENT_HAD_BOOKING: {
    code: 'AGENT_HAD_BOOKING',
    message: 'Agent had booking, can not delete',
  },
  APPLY_DATE_IN_HOLIDAY: (date: string) => ({
    code: 'APPLY_DATE_IN_HOLIDAY',
    message: `Apply date: ${date} in holiday`,
  }),
  PARENT_AGENT_INVALID: {
    code: 'PARENT_AGENT_INVALID',
    message: 'Parent agent invalid',
  },
  AREA_HAS_AREA_TIME: {
    code: 'AREA_HAS_AREA_TIME',
    message: 'This area contain time zone, can not delete',
  },
  AREA_HAS_USER_SCANS: {
    code: 'AREA_HAS_USER_SCANS',
    message: 'This area contain user scans, can not delete',
  },
  AREA_EXISTED_IN_SCHEDULE: {
    code: 'AREA_EXISTED_IN_SCHEDULE',
    message: 'Area existed in schedule area, can not delete',
  },
  AREA_TIME_EXISTED_IN_SCHEDULE: {
    code: 'AREA_TIME_EXISTED_IN_SCHEDULE',
    message: 'This time zone is being used in Base Schedule. Please delete from Base Schedule first',
  },
  AREA_TIME_EXISTED_IN_DAILY_SCHEDULE: {
    code: 'AREA_TIME_EXISTED_IN_DAILY_SCHEDULE',
    message:
      'This time zone is being used in Daily Schedule from now to future. Please delete from Daily Schedule first',
  },
  AREA_TIME_EXISTED_IN_BOOKING_AREA: {
    code: 'AREA_TIME_EXISTED_IN_BOOKING_AREA',
    message: 'This time zone already had booking',
  },
  USER_NAME_EXIST: {
    code: 'USER_NAME_EXIST',
    message: 'This user name already existed',
  },
  AREA_HAS_BOOKING: (name: string) => ({
    code: 'AREA_HAS_BOOKING',
    message: `Area ${name} has booking`,
  }),
  OVER_TIME: {
    code: 'OVER_TIME',
    message: 'Advance reservations will be accepted until 00:00 the day before your visit.',
  },
  HOLIDAY_IN_PAST: {
    code: 'HOLIDAY_IN_PAST',
    message: 'Holiday in past',
  },
  HOLIDAY_EXIST_IN_LOCATION: {
    code: 'HOLIDAY_EXIST_IN_LOCATION',
    message: 'This holiday already existed in specify location.',
  },
  SCHEDULE_IN_HOLIDAY: {
    code: 'SCHEDULE_IN_HOLIDAY',
    message: 'There is daily schedule in this holiday.',
  },
  DELETE_STAFF_ACTIVE: {
    code: 'DELETE_STAFF_ACTIVE',
    message: 'Staff is active, can not delete',
  },
  CREATE_LOCATION_ADMIN_PERMISSION: {
    code: 'CREATE_LOCATION_ADMIN_PERMISSION',
    message: 'Only root can access this API',
  },
  GROUP_ADMIN_EXIST: {
    code: 'GROUP_ADMIN_EXIST',
    message: 'Group admin existed',
  },
  DELETE_GROUP_PERMISSION_INVALID: {
    code: 'DELETE_GROUP_PERMISSION_INVALID',
    message: 'Your permission is invalid to delete group',
  },
  GROUP_PERMISSION_SETTING_INVALID: {
    code: 'GROUP_PERMISSION_SETTING_INVALID',
    message: 'Group permission setting is invalid',
  },
  STAFF_LOGIN_INACTIVE: {
    code: 'STAFF_LOGIN_INACTIVE',
    message: 'Your account is inactive, please contact your Administrator',
  },
  IN_DATE_PURCHASE_EMPTY: {
    code: 'IN_DATE_PURCHASE_EMPTY',
    message: 'There is not any ticket',
  },
  BOOKING_ALREADY_PRINTED: {
    code: 'BOOKING_ALREADY_PRINTED',
    message: 'This ticket has already been printed!',
  },
  UPDATE_DAILY_AREATIME_REMAIN_FAIL: {
    code: 'UPDATE_DAILY_AREATIME_REMAIN_FAIL',
    message: 'Update remain on Daily Timezone fail!',
  },
};
