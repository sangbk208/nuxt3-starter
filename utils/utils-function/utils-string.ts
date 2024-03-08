export function isValidString(param: any): param is string {
  return typeof param === 'string' && param !== '';
}
