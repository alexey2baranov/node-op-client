export default function (date: Date): string {
  return date ? [date.getFullYear(),('0' + (date.getMonth() + 1)).slice(-2), ('0' + date.getDate()).slice(-2)].join('-') : null
}

