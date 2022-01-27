import { Pipe, PipeTransform } from '@angular/core';
import { article_category } from 'src/models/article_category.model';

@Pipe({
  name: 'articlecategoriesFilter'
})
export class ArticlecategoriesFilterPipe implements PipeTransform {

  transform(article_categories: article_category[], search: string=""): article_category[] {
    if(search.length === 0)
    {
      return article_categories;
    }else{
      let FilteredArticleCategories = article_categories.filter( category => category.name.toUpperCase().includes(search.toUpperCase()) );
      return FilteredArticleCategories;
    }
  }

}
