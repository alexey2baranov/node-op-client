export default function (str:string):Date {
  return str?new Date(Date.parse(str)+new Date().getTimezoneOffset()*60000):null
}
