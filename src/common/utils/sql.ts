export function convertTimezone(column: string): string {
  return `CONVERT_TZ(${column}, @@session.time_zone, '${process.env.TIMEZONE_NUM}')`;
}

export function dateFormatTimezone(column: string): string {
  return `DATE_FORMAT(${convertTimezone(column)}, '%Y-%m-%d')`;
}
