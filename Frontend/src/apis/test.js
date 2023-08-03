import httpTest from "../utils/test";

export function getTestApi(){
  return httpTest.get('/test')
}
