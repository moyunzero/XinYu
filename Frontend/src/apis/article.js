import httpArticle from "../utils/article";

export function getArticleApi(){
  return httpArticle.get('/article')
}
