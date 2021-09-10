import { Ingredient } from '../shared/ingredients.module';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngrediant(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
