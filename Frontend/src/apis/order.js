import httpOrder from "../utils/order";

export function getOrderApi(){
  return httpOrder.get('/order')
}
export function getOrderApi2(){
  return httpOrder.get('/order2')
}
export function getOrderApi3(){
  return httpOrder.get('/order3')
}