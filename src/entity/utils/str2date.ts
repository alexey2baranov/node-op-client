export default function (str:string):Date {
  if (!str){
    return null
  }
  let timestamp= Date.parse(str)
  if (!str.endsWith('Z')){
    timestamp+= new Date().getTimezoneOffset()*60000
  }
  return new Date(timestamp)
}
