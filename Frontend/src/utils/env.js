let baseUrl = ''
let routerMode = 'hash'
if(process.env.NODE_ENV == 'development'){
    baseUrl = 'http://soulpal.top:3006/walls'
   
}
export {
    baseUrl,
    routerMode,
}
