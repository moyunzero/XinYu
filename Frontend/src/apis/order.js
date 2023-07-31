import httpOrder from "../utils/order";

export function getOrderApi(){
  return httpOrder.get('/order')
}