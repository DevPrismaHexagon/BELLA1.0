import { Pipe, PipeTransform } from '@angular/core';
import { article } from 'src/models/article.model';

@Pipe({
  name: 'articlesFilter'
})
export class ArticlesFilterPipe implements PipeTransform {

  transform(articles: article[], search:string=""): article[] {
    if(search.length === 0)
    {
      return articles;
    }else{
      let FilteredArticles = articles.filter( article => article.name.toUpperCase().includes(search.toUpperCase()) );
      return FilteredArticles;
    }
  }

}
