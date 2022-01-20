import { Pipe, PipeTransform } from '@angular/core';
import { article_category } from 'src/models/article_category.model';

@Pipe({
  name: 'articlecategoriesbyidFilter'
})
export class ArticlecategoriesbyidFilterPipe implements PipeTransform {

  transform(article_categories: article_category[], id: number): article_category[] {
    console.log(id);
    let FilteredArticleCategories = article_categories.filter( category => category.id != id );
    console.log(FilteredArticleCategories);
    return FilteredArticleCategories;
  }

}
