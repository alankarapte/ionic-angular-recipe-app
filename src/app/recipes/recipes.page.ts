/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: '01',
      imageUrl:
        'https://image.freepik.com/free-vector/good-food-logo-template_79169-17.jpg',
      ingredients: ['varan', 'bhat', 'meeth'],
      title: 'Varan bhat',
    },
    {
      id: '02',
      imageUrl:
        'https://image.freepik.com/free-vector/good-food-logo-template_79169-17.jpg',
      ingredients: ['bhendi', 'bhaji'],
      title: 'Bhendichi bhaji',
    },
    {
      id: '03',
      imageUrl:
        'https://image.freepik.com/free-vector/good-food-logo-template_79169-17.jpg',
      ingredients: ['chicken', 'bhat', 'rassa'],
      title: 'Chicken Biryani',
    },
    {
      id: '04',
      imageUrl:
        'https://image.freepik.com/free-vector/good-food-logo-template_79169-17.jpg',
      ingredients: ['milk', 'shake', 'glass'],
      title: 'Milk Shake',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
