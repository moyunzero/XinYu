let baseUrl = ''
let routerMode = 'hash'
if(process.env.NODE_ENV == 'development'){
    baseUrl = 'http://localhost:3000/walls'
   
}else{
    // baseUrl = 'https://***/walls'

}
export {
    baseUrl,
    routerMode,
}
