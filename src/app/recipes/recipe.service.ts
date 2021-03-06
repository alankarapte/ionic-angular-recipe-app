import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: '1',
      imageUrl:
        'https://image.freepik.com/free-vector/good-food-logo-template_79169-17.jpg',
      ingredients: ['varan', 'bhat', 'meeth'],
      title: 'Varan bhat',
    },
    {
      id: '2',
      imageUrl:
        'https://image.freepik.com/free-vector/good-food-logo-template_79169-17.jpg',
      ingredients: ['bhendi', 'bhaji'],
      title: 'Bhendichi bhaji',
    },
    {
      id: '3',
      imageUrl:
        'https://image.freepik.com/free-vector/good-food-logo-template_79169-17.jpg',
      ingredients: ['chicken', 'bhat', 'rassa'],
      title: 'Chicken Biryani',
    },
    {
      id: '4',
      imageUrl:
        'https://image.freepik.com/free-vector/good-food-logo-template_79169-17.jpg',
      ingredients: ['milk', 'shake', 'glass'],
      title: 'Milk Shake',
    },
  ];

  constructor() {}

  getAllRecipes() {
    // used spread operator to copy array elements
    return [...this.recipes];
  }

  getRecipe(id: string) {
    // used spread operator to copy object properties
    return { ...this.recipes.find((recipe) => recipe.id === id) };
  }

  deleteRecipe(id){
    this.recipes = this.recipes.filter( recipe => recipe.id !== id );
  }
}
