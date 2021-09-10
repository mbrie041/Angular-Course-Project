import { Recipe } from './recipe.model';
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
